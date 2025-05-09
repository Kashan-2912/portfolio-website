"use client"

import { motion } from "framer-motion"

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

interface AnimatedTextProps {
  text: string
  className?: string
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block text-foreground dark:text-background text-8xl font-bold w-full capitalize ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span key={word + "-" + index} className="inline-block" variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
