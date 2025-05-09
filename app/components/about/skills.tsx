"use client"

import { useState, useEffect } from "react"

interface SkillProps {
  name: string
  x: string
  y: string
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <div
      className="cursor-pointer w-max origin-center absolute font-semibold bg-foreground text-background py-3 px-6 rounded-full dark:bg-background dark:text-foreground lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-foreground xs:dark:text-background xs:font-bold"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      {name}
    </div>
  )
}

export const Skills = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="mt-64 md:mt-32">
      <h2 className="font-bold text-8xl w-full text-center md:text-6xl">Skills</h2>
      <div className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        {isMounted && (
          <>
            <div className="cursor-pointer flex rounded-full font-semibold bg-foreground text-background p-8 shadow-dark dark:bg-background dark:text-foreground lg:p-6 md:p-4 xs:text-xs xs:p-2">
              Web
            </div>
            <Skill name="HTML" x="0vw" y="-10vw" />
            <Skill name="CSS" x="-20vw" y="2vw" />
            <Skill name="JavaScript" x="20vw" y="6vw" />
            <Skill name="ReactJS" x="0vw" y="12vw" />
            <Skill name="NextJS" x="-20vw" y="-15vw" />
            <Skill name="GatsbyJS" x="15vw" y="-12vw" />
            <Skill name="Github" x="-35vw" y="-5vw" />
            <Skill name="Web Design" x="32vw" y="-5vw" />
            <Skill name="Figma" x="0vw" y="-20vw" />
            <Skill name="Firebase" x="-25vw" y="18vw" />
            <Skill name="Tailwind CSS" x="28vw" y="18vw" />
          </>
        )}
      </div>
    </div>
  )
}
