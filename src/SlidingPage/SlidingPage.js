import React from "react";
import "./SlidingPage.css";

const SlidingPage = () => {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const InitialTransition = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        />
      </div>
    );
  };
  return (
    <div>
    <pattern
    id="pattern"
    patternUnits="userSpaceOnUse"
    width={750}
    height={800}
    className="text-white"
  >
    
    <rect className="w-full h-full fill-current" />
    <motion.rect className="w-full h-full text-gray-600 fill-current" />
  </pattern>
    <text
      className="text-4xl font-bold"
      text-anchor="middle"
      x="50%"
      y="50%"
      style={{ fill: "url(#pattern)" }}
    >
      tailstore
    </text>
    </div>
  );
};
export default SlidingPage;
