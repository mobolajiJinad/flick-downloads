import Carousel from "@/components/Carousel";
import MovieContainer from "@/components/MovieContainer";
import {
  getDiscoverMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const actionMovies = await getDiscoverMovies(28);
  const adventureMovies = await getDiscoverMovies(12);
  const comedyMovies = await getDiscoverMovies(35);
  const animationMovies = await getDiscoverMovies(16);

  return (
    <main>
      <Carousel />

      <div className="flex flex-col space-y-2">
        <MovieContainer
          movies={nowPlayingMovies}
          title="Now Playing"
          searchQuery="Now Playing"
        />
        <MovieContainer
          movies={topRatedMovies}
          title="Top Rated"
          searchQuery="Top Rated"
        />
        <MovieContainer
          movies={popularMovies}
          title="Popular"
          searchQuery="Popular"
        />
        <MovieContainer
          movies={upcomingMovies}
          title="upcoming"
          searchQuery="upcoming"
        />
      </div>
    </main>
  );
}
