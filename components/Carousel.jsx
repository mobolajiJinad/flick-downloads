import { getDiscoverMovies } from "@/lib/getMovies";
import HeroCarousel from "@/components/HeroCarousel";

const Carousel = async ({ id, keywords }) => {
  const movies = await getDiscoverMovies(id, keywords);

  return <HeroCarousel movies={movies} />;
};

export default Carousel;
