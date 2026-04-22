export default function JobCardSkeleton() {
  return (
    <div className="jf-card p-6 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="skeleton w-12 h-12 !rounded-xl" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-3 w-1/3" />
          <div className="skeleton h-3 w-1/4" />
        </div>
      </div>
      <div className="skeleton h-5 w-3/4" />
      <div className="flex gap-2">
        <div className="skeleton h-6 w-16 !rounded-full" />
        <div className="skeleton h-6 w-20 !rounded-full" />
        <div className="skeleton h-6 w-14 !rounded-full" />
      </div>
      <div className="flex justify-between pt-3 border-t border-[var(--color-border-subtle)]">
        <div className="skeleton h-4 w-24" />
        <div className="skeleton h-9 w-28 !rounded-lg" />
      </div>
    </div>
  );
}
