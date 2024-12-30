import MovieContainer from "@/components/MovieContainer";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

const SearchPage = async ({ params: { term } }) => {
  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="mx-auto max-w-screen-xl py-10">
      <h2 className="mb-5 px-10 text-4xl font-bold">Results for {termToUse}</h2>
      <MovieContainer movies={movies} title="Searched Movies" isVertical />
      <MovieContainer movies={popularMovies} title="You may also like" />
    </div>
  );
};

export default SearchPage;
