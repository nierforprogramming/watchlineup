import React from "react";

const SectionHeading = ({ text, className }) => {
  return (
    <div
      className={`${className ? className : ""} text-white mb-10 sm:mb-15 text-3xl sm:text-4xl font-bold`}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default SectionHeading;
