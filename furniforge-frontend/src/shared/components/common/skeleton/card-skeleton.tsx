import { Skeleton } from "../../ui/skeleton";

export const CardSkeleton = () => {
  return (
    <div className="border rounded-xl p-4 space-y-3">
      <Skeleton className="h-40 w-full rounded-lg" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
};