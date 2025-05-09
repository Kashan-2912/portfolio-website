"use client"

import { motion } from "framer-motion"

export const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary dark:bg-primary-dark"
        initial={{ width: "100%", x: "0%" }}
        animate={{ width: "0%", x: "0%" }}
        exit={{ width: "100%", x: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-background dark:bg-background"
        initial={{ width: "100%", x: "0%" }}
        animate={{ width: "0%", x: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-foreground dark:bg-background"
        initial={{ width: "100%", x: "0%" }}
        animate={{ width: "0%", x: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  )
}
