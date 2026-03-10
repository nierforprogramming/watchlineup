"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TodaysLineUp from "@/components/TodaysLineUp";
import { useLineUpStore } from "@/store/useLineUpStore";
import { useEffect } from "react";

const Home = () => {
  const refreshToday = useLineUpStore((state) => state.refreshToday);

  useEffect(() => {
    refreshToday();
  }, [refreshToday]);
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="px-4 pt-15 sm:pt-25 sm:px-8 md:px-12 lg:px-20">
        <TodaysLineUp />
      </div>
    </div>
  );
};

export default Home;
