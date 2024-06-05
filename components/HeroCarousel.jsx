"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import getImagePath from "@/lib/getImagePath";

const HeroCarousel = ({ movies }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div className="relative cursor-pointer overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full relative min-w-0">
            <Image
              src={getImagePath(movie?.backdrop_path, true)}
              alt={movie?.title}
              width={1920}
              height={1080}
            />

            <div className="absolute left-0 top-0 z-10 hidden h-full w-full space-y-5 bg-transparent bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 pt-40 text-white lg:inline xl:pt-72">
              <h2 className="max-w-xl text-5xl font-bold">{movie?.title}</h2>
              <p className="line-clamp-3 max-w-xl">{movie?.overview}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 left-0 top-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-[#121212]" />
    </div>
  );
};

export default HeroCarousel;
