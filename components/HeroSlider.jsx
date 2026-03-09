"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useMoviesAndTVShowsStore } from "@/store/useMoviesAndTVShowsStore";

const HeroSlider = () => {
  const data = useMoviesAndTVShowsStore((state) => state.data);
  console.log(data.results);

  return (
    <section className="w-full min-h-svh h-dvh">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {data?.results?.map((result) => (
          <SwiperSlide key={result.id}>
            <div className="relative w-full min-h-svh h-dvh overflow-hidden">
              {/* Background image */}
              <Image
                src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                alt={result.name || "Movie background"}
                fill
                priority
                className="object-cover"
              />

              {/* Faint overlay */}
              <div className="absolute inset-0 bg-black/35 z-10" />

              {/* Optional top fade */}
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/40 z-10" />

              {/* Text content on top */}
              <div className="absolute inset-0 z-20 flex items-start">
                <div className="w-full px-4 pt-52 sm:px-8 md:px-12 lg:px-20">
                  <div className="max-w-3xl text-white">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                      ON YOUR LINE UP
                    </p>

                    <h1 className="text-3xl uppercase font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      {result.name}
                    </h1>
                    <div className="flex space-x-8 font-semibold">
                      <p className="mt-4 text-lg text-white/90">
                        ⭐ {result.vote_average ?? "N/A"} / 10
                      </p>

                      <p className="mt-4 text-lg text-white/90">
                        {result.first_air_date.slice(0, 4) ?? "TBA"}
                      </p>
                    </div>

                    <p className="mt-4 max-w-2xl text-lg leading-8 font-semibold text-gray-300 sm:text-base md:text-lg line-clamp-3">
                      {result.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
