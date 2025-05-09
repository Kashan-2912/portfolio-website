"use client"

import { useState, useEffect, useRef } from "react"

interface CounterProps {
  value: number
  title: string
}

const Counter = ({ value, title }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const step = Math.floor(duration / value)

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= value) {
          clearInterval(timer)
        }
      }, step)

      return () => clearInterval(timer)
    }
  }, [value, isInView])

  return (
    <div className="flex flex-col items-end justify-center xl:items-center">
      <span ref={ref} className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
        {count}+
      </span>
      <h2 className="mb-4 text-xl font-medium capitalize text-foreground/75 dark:text-background/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
        {title}
      </h2>
    </div>
  )
}

export const StatsCounter = () => {
  return (
    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
      <Counter value={50} title="satisfied clients" />
      <Counter value={40} title="projects completed" />
      <Counter value={4} title="years of experience" />
    </div>
  )
}
