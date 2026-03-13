"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark font-semibold py-2 px-4 text-xs sm:text-sm lg:text-base sm:py-3 sm:px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ x: { duration: 1.5 }, y: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};


const Skills = () => {
  const skills = [
    { name: "HTML", x: "-20vw", y: "2vw" },
    { name: "CSS", x: "-5vw", y: "-10vw" },
    { name: "JavaScript", x: "15vw", y: "-3vw" },
    { name: "React", x: "0vw", y: "12vw" },
    { name: "Next.js", x: "-25vw", y: "-18vw" },
    { name: "Tailwind CSS", x: "15vw", y: "-12vw" },
    { name: "TypeScript", x: "30vw", y: "-15vw" },
    { name: "Node.js", x: "30vw", y: "2vw" },
    { name: "Express", x: "-30vw", y: "-5vw" },
    { name: "MongoDB", x: "0vw", y: "-20vw" },
    { name: "Supabase", x: "-35vw", y: "5vw" },
    { name: "NeonDB", x: "35vw", y: "10vw" },
    { name: "Firebase", x: "-18vw", y: "12vw" },
    { name: "AppWrite", x: "-28vw", y: "18vw" },
    { name: "Redis", x: "20vw", y: "-20vw" },
    { name: "ORM's", x: "34vw", y: "-8vw" },
    { name: "REST", x: "0vw", y: "20vw" },
    { name: "Framer Motion", x: "20vw", y: "15vw" },
    { name: "Web Sockets", x: "-12vw", y: "-15vw" },
    { name: "Git", x: "10vw", y: "10vw" },
    { name: "Vercel", x: "-10vw", y: "7vw" },
  ];

  return (
    <>
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-32 sm:mt-48 lg:mt-64 w-full text-center">Skills</h2>

      <div className="w-full h-[60vh] sm:h-[70vh] lg:h-screen relative flex items-center justify-center rounded-full bg-circular-light dark:bg-circular-dark">
        <motion.div
          className="flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark font-semibold p-3 sm:p-4 lg:p-5 shadow-dark cursor-pointer text-xs sm:text-sm lg:text-base"
          whileHover={{ scale: 1.05 }}
        >
          Web Dev
        </motion.div>

        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;
