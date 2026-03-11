"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useLineUpStore } from "@/store/useLineUpStore";
import { lineUpCategories } from "@/assets";
import Image from "next/image";

const OnAir = () => {
  const timeShow = useLineUpStore((state) => state.timeBasedShow);
  const time = useLineUpStore((state) => state.time);
  const loading = useLineUpStore((state) => state.loading);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="min-h-[420px] rounded-3xl bg-white/5" />
        ))}
      </div>
    );
  }

  if (!timeShow) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center rounded-3xl bg-white/5 text-white/70">
        No available show.
      </div>
    );
  }

  const category = lineUpCategories.find(
    (lineupcategory) => lineupcategory.name === timeShow?.category,
  );

  console.log(category);

  const result = timeShow.tmdb;

  return (
    <section className="text-gray-300 space-y-6">
      {/* Greeting */}
      <div>
        <SectionHeading className="sm:mb-2" text={time.title} />
        <p className="text-gray-400">
          {category?.desc ?? "Here is the next pick for you"}
        </p>
      </div>

      {/* Hero Card */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        {/* Background Image */}
        <div className="relative h-100 sm:h-150 w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original${result.backdropPath}`}
            alt={result.title || "background"}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0
          flex items-end sm:items-center
          justify-center sm:justify-start
          p-1 sm:p-12
          bg-gradient-to-t sm:bg-gradient-to-r
          from-${category.bg}/40 via-${category.bg}/20 to-transparent`}
        >
          {/* Text Contai ner */}
          <div className="max-w-xl text-center sm:text-left space-y-4">
            {/* Category */}
            <p className="tracking-widest text-sm inline-block bg-purple-700/20 text-purple-400 px-3">
              {timeShow.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              {result.title}
            </h1>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {result.genres.map((genre) => (
                <span
                  key={genre.id}
                  className=" bg-black/30 backdrop-blur-md px-3 py-1 rounded-md text-sm text-white"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p className="text-white/80 text-sm sm:text-base line-clamp-3">
              {result.overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnAir;
