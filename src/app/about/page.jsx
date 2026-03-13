"use client"

import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <>
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className={"pt-8 sm:pt-12 lg:pt-16"}>
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-8 sm:mb-12 lg:mb-16 !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl"
          />

          {/* Bio + Image + Stats grid */}
          <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-8 lg:gap-16">
            {/* Biography */}
            <div className="col-span-1 md:col-span-4 lg:col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-base sm:text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-sm sm:text-base">
                Hi, I&apos;m Kashan, a web developer and designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With over 2 years of self learning experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className="font-medium my-4 text-sm sm:text-base">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium text-sm sm:text-base">
                Whether I&apos;m working on a website, custom solutions or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            {/* Profile pic */}
            <div className="col-span-1 md:col-span-4 lg:col-span-3 relative h-max rounded-2xl rounded-br-xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-4 sm:p-6 lg:p-8 order-first md:order-none">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-2xl bg-dark dark:bg-light" />
              <img src={'/Kashan.jpg'} alt="Kashan" className="w-full h-auto rounded-2xl" />
            </div>

            {/* Stats */}
            <div className="col-span-1 md:col-span-8 lg:col-span-2 flex flex-row md:flex-row lg:flex-col items-center justify-between lg:items-end gap-6 py-4 lg:py-0">
              <div className="flex flex-col items-center lg:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center lg:text-right">satisfied clients</h2>
              </div>

              <div className="flex flex-col items-center lg:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  <AnimatedNumber value={15} />+
                </span>
                <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center lg:text-right">projects completed</h2>
              </div>

              <div className="flex flex-col items-center lg:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  <AnimatedNumber value={2} />+
                </span>
                <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center lg:text-right">years of experience</h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default page;
