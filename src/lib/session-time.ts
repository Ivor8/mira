type SessionTime = {
  session_date: string;
  start_time: string;
  end_time: string;
};

export type SessionJoinState = {
  status: "too-early" | "available" | "ended";
  waitLabel?: string;
};

function toLocalDate(date: string, time: string): Date {
  return new Date(`${date}T${time}`);
}

function formatWait(ms: number): string {
  const minutes = Math.max(1, Math.ceil(ms / 60000));
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  const hours = Math.ceil(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"}`;
  const days = Math.ceil(hours / 24);
  return `${days} day${days === 1 ? "" : "s"}`;
}

export function getSessionJoinState(session: SessionTime, now = new Date()): SessionJoinState {
  const startsAt = toLocalDate(session.session_date, session.start_time);
  const endsAt = toLocalDate(session.session_date, session.end_time);
  if (now < startsAt) return { status: "too-early", waitLabel: formatWait(startsAt.getTime() - now.getTime()) };
  if (now > endsAt) return { status: "ended" };
  return { status: "available" };
}