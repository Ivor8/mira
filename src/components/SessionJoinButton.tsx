import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getSessionJoinState } from "@/lib/session-time";

type SessionJoinButtonProps = {
  session: {
    session_date: string;
    start_time: string;
    end_time: string;
    meet_url: string;
  };
  onJoin: () => void;
  busy?: boolean;
  className?: string;
  fullWidth?: boolean;
};

export function SessionJoinButton({ session, onJoin, busy, className, fullWidth }: SessionJoinButtonProps) {
  const [showTooEarly, setShowTooEarly] = useState(false);

  const handleClick = () => {
    const joinState = getSessionJoinState(session);
    if (joinState.status === "too-early") {
      setShowTooEarly(true);
      return;
    }
    onJoin();
  };

  const joinState = getSessionJoinState(session);
  const waitMessage = joinState.status === "too-early"
    ? `Please come back in ${joinState.waitLabel}.`
    : "";

  return (
    <>
      <Button
        onClick={handleClick}
        disabled={busy}
        className={`${fullWidth ? "w-full " : ""}${className ?? ""}`}
      >
        Join live class <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
      <Dialog open={showTooEarly} onOpenChange={setShowTooEarly}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>It is not time for class yet</DialogTitle>
            <DialogDescription>
              This class has not started. {waitMessage} You can join when the scheduled start time arrives.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowTooEarly(false)}>Got it</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}