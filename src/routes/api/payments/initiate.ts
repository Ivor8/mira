import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/payments/initiate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { amount, phone, provider, studentId, bootcampId } = await request.json();

          if (!amount || !phone || !provider || !studentId || !bootcampId) {
            return new Response(
              JSON.stringify({ error: "Missing required fields: amount, phone, provider, studentId, bootcampId" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const FAPSHI_API_USER = process.env.FAPSHI_API_USER;
          const FAPSHI_API_KEY = process.env.FAPSHI_API_KEY;
          const FAPSHI_BASE_URL = process.env.FAPSHI_BASE_URL || "https://sandbox.fapshi.com";

          const isMockMode = !FAPSHI_API_USER || !FAPSHI_API_KEY || FAPSHI_API_USER === "YOUR_FAPSHI_API_USER" || FAPSHI_API_KEY === "YOUR_FAPSHI_API_KEY";

          // Map provider to Fapshi medium format (MTN or ORANGE)
          const medium = provider === "mtn_momo" ? "MTN" : "ORANGE";

          // Parse phone number: Fapshi expects standard Cameroon phone format (usually starting with 6, e.g. 670000000)
          // Clean the input to grab the last 9 digits of a Cameroon number if it has country code
          let cleanedPhone = phone.replace(/\D/g, "");
          if (cleanedPhone.length > 9) {
            cleanedPhone = cleanedPhone.slice(-9);
          }

          if (cleanedPhone.length !== 9 || !["6"].includes(cleanedPhone[0])) {
            return new Response(
              JSON.stringify({ error: "Invalid Cameroon mobile network number. Must be 9 digits (e.g., 67xxxxxxx or 69xxxxxxx)" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          let transId: string;
          let fapshiData: any;

          if (isMockMode) {
            console.log("Fapshi API credentials not configured. Running in Mock Sandbox mode.");
            transId = "mock_trans_" + Math.random().toString(36).slice(2, 10);
            fapshiData = { mock: true, transId, status: "PENDING", mockPollCount: 0 };
          } else {
            // Call Fapshi Direct Pay API
            const fapshiRes = await fetch(`${FAPSHI_BASE_URL}/direct-pay`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "apiuser": FAPSHI_API_USER,
                "apikey": FAPSHI_API_KEY,
              },
              body: JSON.stringify({
                amount,
                phone: cleanedPhone,
                medium,
                userId: studentId,
                externalId: bootcampId,
              }),
            });

            fapshiData = await fapshiRes.json();

            if (!fapshiRes.ok || !fapshiData.transId) {
              return new Response(
                JSON.stringify({ error: fapshiData.message || fapshiData.error || "Fapshi Direct Pay request failed" }),
                { status: fapshiRes.status || 400, headers: { "Content-Type": "application/json" } }
              );
            }

            transId = fapshiData.transId;
          }

          // Insert registration as pending/placeholder or insert payment as pending in Database
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

          const { error: dbError } = await supabaseAdmin.from("payments").insert({
            student_id: studentId,
            bootcamp_id: bootcampId,
            amount: parseFloat(amount),
            currency: "XAF",
            provider,
            phone_number: cleanedPhone,
            transaction_ref: transId,
            status: "pending",
            metadata: { fapshiResponse: fapshiData },
          });

          if (dbError) {
            console.error("Database insert error:", dbError);
            return new Response(
              JSON.stringify({ error: "Failed to record payment initialization in database" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          return new Response(
            JSON.stringify({ transId, message: "Payment initialized on user phone" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );

        } catch (e: any) {
          console.error("Initiate error:", e);
          return new Response(
            JSON.stringify({ error: e.message || "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
