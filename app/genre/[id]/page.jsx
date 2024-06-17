import Script from "next/script";

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
      <Script
        async="async"
        data-cfasync="false"
        src="//pl23575725.highrevenuenetwork.com/13b79ce12ac8ebb179c5f729a82f4d9b/invoke.js"
      ></Script>
      <div id="container-13b79ce12ac8ebb179c5f729a82f4d9b"></div>
    </div>
  );
};

export default GenrePage;
