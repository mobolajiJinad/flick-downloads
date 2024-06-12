import { getDiscoverMovies } from "@/lib/getMovies";
import MovieContainer from "@/components/MovieContainer";

const GenrePage = async ({ params: { id }, searchParams: { genre } }) => {
  const movies = await getDiscoverMovies(id);

  return (
    <div className="mx-auto max-w-screen-xl py-10">
      <h2 className="mb-5 px-10 text-2xl font-bold sm:text-4xl">
        Results for {genre}
      </h2>
      <MovieContainer movies={movies} title="Genre" isVertical />
    </div>
  );
};

export default GenrePage;
