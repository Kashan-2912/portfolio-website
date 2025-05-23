"use client";

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-2xl font-bold">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>

        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2022-2026"
            place={
              <>
                Islamabad - Pakistan | <strong>CGPA: 3.50/4.00</strong>
              </>
            }
            info={
              <>
                Relevant courses till now include Introduction to ICT,
                Programming Fundamentals, Data Structures and Algorithms, Object
                Oriented Programming, Database Systems, Computer Networks,
                Theory of Automata, Design and Analysis of Algorithms,
                Principles of Operating Systems, Web Technologies, Information
                Security, Artificial Intelligence, Software Engineering
                Concepts, Mobile Application Development, Computer Organization
                & Assembly Language, Machine Learning and Numerical
                Computations.
                <br />
                <br />
                Participated in COMPETE'24, a university level competitive Web
                Development event, GDSC Bootcamps on Build with AI.
              </>
            }
          />

          <Details
            type="Online Coursework"
            time="2022-Present"
            place="Udemy - Coursera - Edx"
            info={<>
                Completed a variety of online courses covering key technical and creative skills. <strong>Notable courses include:</strong>
                <br />
                <br />
                1. Web Development Bootcamp (Angela Yu, 2025)<br />
                2. Mobile App Development (Angela Yu, 2025)<br />
                3. Programming for Everybody (University of Michigan)<br />
                4. Python for Everybody, DSA in Python<br />
                5. Graphic Design Fundamentals.
            </>}
          />

          <Details
            type="Pre-Engineering | Intermediate (HSSC)"
            time="2020-2022"
            place="Islamabad College for Boys, G-6/3, Islamabad"
            info={
              <>
                Secured <strong>93%</strong> marks in the Federal Board
                examinations, demonstrating strong academic performance in core
                subjects like Mathematics, Physics, and Chemistry. Developed a
                solid foundation for further studies in engineering and
                technology.
              </>
            }
          />

          <Details
            type="Secondary School | SSC"
            time="2018-2020"
            place="Islamabad Model School for Boys, G-6/4."
            info={
              <>
                Achieved <strong>96%</strong> marks in the Federal Board SSC
                examinations, with exceptional performance in core science
                subjects like Physics and Mathematics. Built a strong academic
                foundation and <strong>ranked number 1</strong> in the
                institution.
              </>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
