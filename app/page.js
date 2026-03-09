import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import React from "react";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
};

export default Home;
