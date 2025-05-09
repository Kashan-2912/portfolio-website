import { Navbar } from "@/components/layout/navbar"
import { TransitionEffect } from "@/components/transition-effect"
import { AnimatedText } from "@/components/animated-text"
import Image from "next/image"
import { ExperienceItem } from "@/components/about/timeline-items"
import { Skills } from "@/components/about/skills"
import { BiographySection } from "@/components/about/biography-section"
import { StatsCounter } from "@/components/about/stats-counter"

export default function About() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-background">
        <Navbar />
        <div className="z-0 inline-block h-full w-full bg-background p-32 dark:bg-background xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <BiographySection />

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-foreground bg-background p-8 dark:border-background dark:bg-background xl:col-span-4 md:col-span-8 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-foreground dark:bg-background"></div>
              <Image
                src="/placeholder.svg?height=2345&width=1920"
                alt="Codebucks"
                width={1920}
                height={2345}
                priority
                className="h-auto w-full rounded-2xl"
              />
            </div>

            <StatsCounter />
          </div>

          <Skills />

          <div className="my-64">
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
              Experience
            </h2>
            <div className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
              <div
                className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-foreground origin-top dark:bg-primary-dark dark:shadow-3xl"
                style={{ transform: "scaleY(1)" }}
              ></div>
              <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <ExperienceItem
                  position="Software Engineer"
                  company="Google"
                  companyLink="https://google.com/"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                />
                <ExperienceItem
                  position="Intern"
                  company="Facebook"
                  companyLink="https://facebook.com/"
                  time="Summer 2021"
                  address="Menlo Park, CA."
                  work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
                />
            </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}