"use client";

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] sm:w-[70%] lg:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-lg sm:text-xl lg:text-2xl font-bold">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primary-dark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm sm:text-base">
          {time} | {address}
        </span>

        <p className="font-medium w-full text-sm sm:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32 sm:my-48 lg:my-64">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 sm:mb-24 lg:mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[90%] sm:w-[85%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Junior Software Engineer"
            company="Svype"
            companyLink={"https://svype.net/"}
            time="08/2025-Present"
            address="Islamabad - Pakistan"
            work={
              <>
                Redesigned and revamped{" "}
                <a href="https://sereneheightsnathiagali.com/" target="_blank" className="text-primary dark:text-primary-dark underline">
                  Serene Heights Nathia Gali
                </a>, a luxury winter resort website.
                Developed{" "}
                <a href="https://sereneheightslahore.com/" target="_blank" className="text-primary dark:text-primary-dark underline">
                  Serene Heights Lahore
                </a>{" "}
                from Figma designs — a 19-storey mixed-use commercial development site.
                Working with Next.js, React, Node.js, Python, AI Agents, AI Automation (n8n),
                RAG, LLMs, and AI Development.
              </>
            }
          />

          <Details
            position="Full Stack Intern"
            company="Sybrid Private Limited"
            companyLink={"https://www.sybrid.com/"}
            time="07/2025"
            address="Islamabad - Pakistan"
            work={
              <>
                Worked on a production-grade app using ReactJS, MantineUI, Formik, Yup
                and Redux state management. Built fully responsive Sell and Purchase screens
                with different UIs for small vs large devices. Integrated NestJS backend
                by calling API endpoints in close collaboration with the backend team.
                Project live at{" "}
                <a href="https://kissan360.vercel.app/" target="_blank" className="text-primary dark:text-primary-dark underline">
                  Kissan360
                </a>.
              </>
            }
          />

          <Details
            position="Frontend Web Developer"
            company="Devsinz"
            companyLink={
              "https://www.linkedin.com/company/devsinz-intern-connect"
            }
            time="07/2024-09/2024"
            address="Islamabad - Pakistan"
            work="Worked on a building e-LMS for students and teachers and name it as Learnify. Learnify is a comprehensive e-LMS platform designed to empower both learners and administrators with user-friendly features like course creation, real-time analytics, interactive quizzes, notification system and certification tracking. With a mobile-responsive design, intuitive interface, and robust features, Learnify ensures a seamless learning journey for everyone."
          />

          <Details
            position="Full Stack Web Developer"
            company="Upwork"
            companyLink={"https://www.upwork.com/"}
            time="2022-Present"
            address="Islamabad - Pakistan"
            work={
              <>
                Worked on a wide range of projects—from fixing TailwindCSS
                styling issues and optimizing Vercel deployments to building
                full-stack web applications. Proficient in React, Next.js, AI
                integrations, Firebase, and RESTful APIs. Experienced in turning
                designs into responsive, high-performance UIs. Committed to
                clean code, fast delivery, and scalable architecture.
                Successfully delivered projects to <strong>3+</strong> satisfied
                clients with consistent positive feedback and repeat
                collaboration.
              </>
            }
          />

          <Details
            position="Website Designer & Developer"
            company="Fiverr"
            companyLink={"https://www.fiverr.com/"}
            time="2022-Present"
            address="Islamabad - Pakistan"
            work={
              <>
                Worked as bug fixer mostly on 2 client projects where I got to
                fix styling issues, optimize UIs, and implement new features in
                already VIBE coded apps. Converted 1 React project completely to
                NextJS for performance optimization and SEO accessibility.
                Successfully delivered projects to <strong>2+</strong> satisfied
                clients with consistent positive feedback and repeat
                collaboration.
              </>
            }
          />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
