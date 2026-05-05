type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-300/60 dark:bg-gray-700/60 rounded-md ${className}`}
    />
  );
};