import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import MovieContainer from "@/components/MovieContainer";
import getImagePath from "@/lib/getImagePath";
import { getMovieDetails, getPopularMovies } from "@/lib/getMovies";

const MovieDetails = async ({ params: { id } }) => {
  const details = await getMovieDetails(id);
  const popularMovies = await getPopularMovies();

  return (
    <div>
      <Head>
        <title>{details?.original_title} - Flicks download</title>
        <script
          type="text/javascript"
          src="//pl23526743.highrevenuenetwork.com/a2/cd/11/a2cd11f7882526639fd3c18b119dc59b.js"
        ></script>
      </Head>

      <div className="px-10">
        <div className="flex flex-col items-center gap-5 py-10 lg:flex-row">
          <div className="group h-auto w-full overflow-hidden rounded-md md:min-h-96 lg:w-1/2">
            <Image
              src={getImagePath(details?.backdrop_path)}
              alt={details?.title}
              width={1920}
              height={1080}
              className="h-full w-full object-cover shadow-md shadow-gray-900 drop-shadow-xl duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex w-full flex-col gap-2 lg:w-1/2">
            <h2 className="text-2xl font-semibold underline decoration-[1px]">
              {details?.original_title}
            </h2>
            <p className="mt-2 text-sm leading-6 tracking-wide">
              {details?.overview}
            </p>
            <p className="text-sm text-gray-200">
              IMDB:{" "}
              <span className="font-medium text-white">
                {details.vote_average}
              </span>
            </p>
            <p className="text-sm text-gray-200">
              Votes:{" "}
              <span className="font-medium text-white">
                {details.vote_count}
              </span>
            </p>
            <p className="text-sm text-gray-200">
              Release Data:{" "}
              <span className="font-medium text-white">
                {details.release_date}
              </span>
            </p>
            <p className="text-sm text-gray-200">
              Genres:{" "}
              {details?.genres.map((item) => (
                <span key={item?.id} className="mr-1 font-medium text-white">
                  {item?.name},
                </span>
              ))}
            </p>
            <p className="text-sm text-gray-200">
              Tag Line:{" "}
              <span className="font-medium text-white">{details.tagline}</span>
            </p>
            <p className="text-sm text-gray-200">
              Status:{" "}
              <span
                className={`font-medium ${
                  details?.status === "Released"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {details.status}
              </span>
            </p>

            <Link
              href="https://www.highrevenuenetwork.com/ep6tus7i?key=cceefa56cb985bbb2eceda6bcd7298af"
              target="_blank"
              className={`${buttonVariants({ variant: "outline" })} w-full md:w-1/2`}
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <MovieContainer
          movies={popularMovies}
          title="Popular Movies"
          isVertical
        />
      </div>
    </div>
  );
};

export default MovieDetails;
