import { motion, useScroll } from "framer-motion";
import React from "react";

const LiIcon = ({reference}) => {

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90 w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primary-dark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary dark:fill-primary-dark animate-pulse" />
      </svg>
    </figure>
  );
};

export default LiIcon;
