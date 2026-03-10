import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useLineUpStore } from "@/store/useLineUpStore";

const ScreenTimeSaturday = () => {
  const saturdayMovies = useLineUpStore((state) => state.saturdayMovies);
  if (!saturdayMovies.length) {
    return <div>No Saturday movies.</div>;
  }

  return (
    <div className="bg-section-background pb-20">
      <div className="px-4 pt-15 sm:pt-25 sm:px-8 md:px-12 lg:px-20">
        <SectionHeading text={"This Weekend"} />
        {saturdayMovies.map((item) => {
          const result = item.tmdb;

          return (
            <div
              key={item.id}
              className="text-white grid sm:grid-cols-2  items-center"
            >
              <div className="">
                <div className="bg-black/40 my-4 text-md sm:text-lg   w-fit px-2 py-1 rounded-sm ">
                  Documentary
                </div>
                <div className="text-3xl my-4 font-bold">{result.title}</div>
                <div className="flex text-md sm:text-lg space-x-7">
                  <div> ⭐ {Math.ceil(result.voteAverage) ?? "N/A"} / 10</div>
                  <div> {result.releaseDate?.slice(0, 4) ?? "TBA"}</div>
                  <div>1h 14m</div>
                  <div>ScreenTime Saturday</div>
                </div>

                <div className="my-8  font-semibold max-w-2xl text-md sm:text-lg  leading-8 line-clamp-3">
                  {result.overview}
                </div>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={`https://image.tmdb.org/t/p/original${result.backdropPath}`}
                  alt={"background"}
                  fill
                  sizes="full"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScreenTimeSaturday;
