"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";

import { sectionLinks } from "@/assets";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] rounded-xl bg-black/30 backdrop-blur-md py-2 text-white">
      <div className="h-16 items-center flex justify-between">
        <Logo />
        {/* Desktop Menu */}
        <div className="hidden sm:block ml-auto">
          {sectionLinks.map((link) => (
            <Link
              className="text-white text-lg px-4"
              href={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="block sm:hidden px-4 text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiMenu3Line />
        </button>
      </div>
      {/* Mobile View */}
      <div
        className={`${isOpen ? "block" : "hidden"} block sm:hidden bg-black/20`}
      >
        {sectionLinks.map((link) => (
          <Link
            className="text-white text-lg p-3 block"
            href={link.path}
            key={link.name}
            onClick={() => setIsOpen(!isOpen)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
