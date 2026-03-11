import React from "react";

const Logo = ({ className }) => {
  return (
    <div
      className={`${className ? className : ""} uppercase text-2xl text-white font-bold px-4`}
    >
      watchlineup
    </div>
  );
};

export default Logo;
