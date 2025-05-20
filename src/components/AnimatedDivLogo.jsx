import React from "react";

const AnimatedDivLogo = () => {
  return (
    <div className="absolute right-8 bottom-8 inline-block w-24">
      <span className="relative flex items-center justify-center w-10 h-10">
        <span className="absolute inline-flex h-full w-full animate-ping hover:pause-animation rounded-full bg-sky-400 opacity-75"></span>
        <img alt="Kashan" src="/dev.svg" className="w-full h-auto" />
      </span>
    </div>
  );
};

export default AnimatedDivLogo;
