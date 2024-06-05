import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

const ViewMorePage = async ({ searchParams: { title } }) => {
  let movies = null;

  if (title === "Now Playing") {
    movies = await getNowPlayingMovies();
  } else if (title === "Upcoming") {
    movies = await getUpcomingMovies();
  } else if (title === "Top Rated") {
    movies = await getTopRatedMovies();
  } else if (title === "Popular") {
    movies = await getPopularMovies();
  }

  return (
    <div className="py-10">
      <h2 className="mb-5 px-10 text-4xl font-bold">Results of {title}</h2>
      <MovieContainer movies={movies} isVertical={true} />
    </div>
  );
};

export default ViewMorePage;
