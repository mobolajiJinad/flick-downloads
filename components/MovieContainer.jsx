import Link from "next/link";

import MovieCard from "@/components/MovieCard";
import { cn } from "@/lib/utils";

const MovieContainer = ({ title, movies, isVertical }) => {
  return (
    <div>
      <div className="relative mx-10 mb-4 flex items-center justify-between border-b border-b-gray-500 py-2">
        <h2 className="text-sm font-bold uppercase tracking-wider">{title}</h2>
        <Link
          href={{ pathname: "/viewmore", query: { title: title } }}
          className="rounded-md border-indigo-600 bg-gray-800 px-2 py-1 text-xs font-semibold uppercase text-white duration-300 hover:bg-black"
        >
          view more
        </Link>

        <span className="absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600"></span>
      </div>

      <div
        className={cn(
          "scrollbar-hide flex space-x-4 overflow-scroll px-5 py-5 lg:px-10",
          isVertical && "flex-col space-x-0 space-y-12",
        )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "mb-5 flex flex-col items-center space-x-5 space-y-5 lg:flex-row",
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie?.title} ({movie?.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p>{movie?.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie?.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieContainer;
