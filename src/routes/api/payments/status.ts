import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/payments/status")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const { searchParams } = new URL(request.url);
          const transId = searchParams.get("transId");

          if (!transId) {
            return new Response(
              JSON.stringify({ error: "Missing query parameter: transId" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

          // 1. Check local database first
          const { data: dbPayment, error: dbPayError } = await supabaseAdmin
            .from("payments")
            .select("*")
            .eq("transaction_ref", transId)
            .maybeSingle();

          if (dbPayError) {
            console.error("Fetch local payment error:", dbPayError);
            return new Response(
              JSON.stringify({ error: "Database query error" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          if (!dbPayment) {
            return new Response(
              JSON.stringify({ error: "Payment transaction not found in local database" }),
              { status: 404, headers: { "Content-Type": "application/json" } }
            );
          }

          if (!dbPayment.bootcamp_id || !dbPayment.student_id) {
            return new Response(
              JSON.stringify({ error: "Invalid payment record in database: missing bootcamp_id or student_id" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          // If payment was already processed as successful or failed locally, return immediately
          if (dbPayment.status === "successful") {
            return new Response(
              JSON.stringify({ status: "SUCCESSFUL", message: "Payment already confirmed successful" }),
              { status: 200, headers: { "Content-Type": "application/json" } }
            );
          }

          if (dbPayment.status === "failed") {
            return new Response(
              JSON.stringify({ status: "FAILED", message: "Payment already marked as failed" }),
              { status: 200, headers: { "Content-Type": "application/json" } }
            );
          }

          // 2. Poll Fapshi API for status
          const FAPSHI_API_USER = process.env.FAPSHI_API_USER;
          const FAPSHI_API_KEY = process.env.FAPSHI_API_KEY;
          const FAPSHI_BASE_URL = process.env.FAPSHI_BASE_URL || "https://sandbox.fapshi.com";

          const isMockMode = transId.startsWith("mock_") || !FAPSHI_API_USER || !FAPSHI_API_KEY || FAPSHI_API_USER === "YOUR_FAPSHI_API_USER";

          let fapshiStatus = "PENDING";
          let fapshiData: any;

          if (isMockMode) {
            const currentMetadata = (dbPayment.metadata as Record<string, any>) || {};
            const pollCount = (currentMetadata.mockPollCount ?? 0) + 1;

            // Update the poll count in database metadata so that next request knows we progressed
            await supabaseAdmin.from("payments").update({
              metadata: { ...currentMetadata, mockPollCount: pollCount }
            }).eq("id", dbPayment.id);

            if (pollCount >= 2) {
              if (dbPayment.phone_number === "690000001" || dbPayment.phone_number?.endsWith("000001")) {
                fapshiStatus = "FAILED";
              } else {
                fapshiStatus = "SUCCESSFUL";
              }
            } else {
              fapshiStatus = "PENDING";
            }
            fapshiData = { status: fapshiStatus, mock: true, pollCount };
          } else {
            const fapshiRes = await fetch(`${FAPSHI_BASE_URL}/payment-status/${transId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "apiuser": FAPSHI_API_USER,
                "apikey": FAPSHI_API_KEY,
              },
            });

            fapshiData = await fapshiRes.json();

            if (!fapshiRes.ok || !fapshiData.status) {
              return new Response(
                JSON.stringify({ error: fapshiData.message || fapshiData.error || "Fapshi check status request failed" }),
                { status: fapshiRes.status || 400, headers: { "Content-Type": "application/json" } }
              );
            }

            fapshiStatus = fapshiData.status;
          }

          if (fapshiStatus === "SUCCESSFUL") {
            // Check if registration already exists
            const { data: existingReg, error: regSelectError } = await supabaseAdmin
              .from("registrations")
              .select("*")
              .eq("bootcamp_id", dbPayment.bootcamp_id)
              .eq("student_id", dbPayment.student_id)
              .maybeSingle();

            if (regSelectError) {
              console.error("Check existing registration error:", regSelectError);
              return new Response(
                JSON.stringify({ error: "Database error checking existing registration" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
              );
            }

            let regId = existingReg?.id;

            if (existingReg) {
              // Update registration to confirmed & successful
              const { error: regUpdateError } = await supabaseAdmin
                .from("registrations")
                .update({
                  status: "confirmed",
                  payment_status: "successful",
                })
                .eq("id", existingReg.id);

              if (regUpdateError) {
                console.error("Update registration error:", regUpdateError);
                return new Response(
                  JSON.stringify({ error: "Database error updating registration" }),
                  { status: 500, headers: { "Content-Type": "application/json" } }
                );
              }
            } else {
              // Insert new registration. Note: the trigger `reg_enforce_cap` will fire here to consume the seat!
              const { data: newReg, error: regInsertError } = await supabaseAdmin
                .from("registrations")
                .insert({
                  bootcamp_id: dbPayment.bootcamp_id,
                  student_id: dbPayment.student_id,
                  status: "confirmed",
                  payment_status: "successful",
                })
                .select("id")
                .single();

              if (regInsertError) {
                console.error("Insert registration error:", regInsertError);
                return new Response(
                  JSON.stringify({ error: regInsertError.message || "Database error enclosing registration" }),
                  { status: 500, headers: { "Content-Type": "application/json" } }
                );
              }

              regId = newReg.id;
            }

            // Update payment record to successful and link it to the registration
            const currentMetadata = (dbPayment.metadata as Record<string, any>) || {};
            const { error: payUpdateError } = await supabaseAdmin
              .from("payments")
              .update({
                status: "successful",
                registration_id: regId,
                metadata: { ...currentMetadata, fapshiStatusResponse: fapshiData },
              })
              .eq("id", dbPayment.id);

            if (payUpdateError) {
              console.error("Update payment status error:", payUpdateError);
              return new Response(
                JSON.stringify({ error: "Database error updating payment record" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
              );
            }

            return new Response(
              JSON.stringify({ status: "SUCCESSFUL", message: "Payment successfully confirmed" }),
              { status: 200, headers: { "Content-Type": "application/json" } }
            );

          } else if (fapshiStatus === "FAILED" || fapshiStatus === "EXPIRED") {
            // Update payment record to failed
            const currentMetadata = (dbPayment.metadata as Record<string, any>) || {};
            const { error: payUpdateError } = await supabaseAdmin
              .from("payments")
              .update({
                status: "failed",
                metadata: { ...currentMetadata, fapshiStatusResponse: fapshiData },
              })
              .eq("id", dbPayment.id);

            if (payUpdateError) {
              console.error("Update payment failure error:", payUpdateError);
            }

            return new Response(
              JSON.stringify({ status: "FAILED", message: `Payment failed with status ${fapshiStatus}` }),
              { status: 200, headers: { "Content-Type": "application/json" } }
            );

          } else {
            // PENDING status
            return new Response(
              JSON.stringify({ status: "PENDING", message: "Payment is still pending authorize in phone" }),
              { status: 200, headers: { "Content-Type": "application/json" } }
            );
          }

        } catch (e: any) {
          console.error("Status check error:", e);
          return new Response(
            JSON.stringify({ error: e.message || "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
