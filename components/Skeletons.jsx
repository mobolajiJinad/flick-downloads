import { Skeleton } from "@/components/ui/skeleton";

export function MovieContainerSkeleton() {
  return (
    <div className="flex w-80 max-w-xl flex-col space-y-3">
      <Skeleton className="h-56 w-fit rounded-xl lg:min-w-[400px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-fit lg:min-w-[400px]" />
        <Skeleton className="h-4 w-fit lg:min-w-[400px]" />
        <Skeleton className="h-4 w-fit lg:min-w-[400px]" />
        <Skeleton className="h-4 w-fit lg:min-w-[400px]" />
      </div>
    </div>
  );
}

export default function LayoutSkeleton() {
  return (
    <>
      <Skeleton className="h-4/5 w-full rounded-xl" />

      <div className="flex space-x-4 overflow-scroll px-5 py-5 lg:px-10">
        <MovieContainerSkeleton />
      </div>
      <div className="flex space-x-4 overflow-scroll px-5 py-5 lg:px-10">
        <MovieContainerSkeleton />
      </div>
      <div className="flex space-x-4 overflow-scroll px-5 py-5 lg:px-10">
        <MovieContainerSkeleton />
      </div>
      <div className="flex space-x-4 overflow-scroll px-5 py-5 lg:px-10">
        <MovieContainerSkeleton />
      </div>
    </>
  );
}

export function GenreSkeleton() {
  return (
    <>
      <MovieContainerSkeleton />
      <MovieContainerSkeleton />
      <MovieContainerSkeleton />
    </>
  );
}
