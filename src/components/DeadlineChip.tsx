import { formatDate, daysUntil } from "@/lib/format";

export default function DeadlineChip({ deadline }: { deadline: string }) {
  const daysLeft = daysUntil(deadline);
  const isUrgent = daysLeft <= 7;

  return (
    <span className={isUrgent ? "text-[var(--color-status-closed)]" : "text-[var(--color-text-muted)]"}>
      {daysLeft >= 0 ? (isUrgent ? `Time left: ${daysLeft} day${daysLeft === 1 ? "" : "s"}` : `Apply by ${formatDate(deadline)}`) : `Closed on ${formatDate(deadline)}`}
    </span>
  );
}
