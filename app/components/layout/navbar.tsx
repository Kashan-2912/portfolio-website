"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ThemeToggle } from "../theme-toggle"
import { SocialIcons } from "../social-icons"
import { Logo } from "../logo"

const CustomLink = ({
  href,
  title,
  className = "",
}: {
  href: string
  title: string
  className?: string
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`${className} relative group rounded mr-4 last:mr-0 mx-4 first:ml-0 last:mr-0`}>
      {title}
      <span
        className={`inline-block h-[1px] bg-foreground absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-foreground ${
          isActive ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 relative lg:px-16 md:px-12 sm:px-8">
      {/* Mobile Menu Button */}
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-foreground block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-foreground block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-foreground block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop Navigation */}
      <div className={`w-full flex justify-between items-center lg:hidden`}>
        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/articles" title="Articles" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap lg:mt-2">
          <SocialIcons />
          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-background/90 dark:bg-background/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex flex-col items-center justify-center mb-8">
            <CustomLink href="/" title="Home" className="my-2" onClick={() => setIsOpen(false)} />
            <CustomLink href="/about" title="About" className="my-2" onClick={() => setIsOpen(false)} />
            <CustomLink href="/projects" title="Projects" className="my-2" onClick={() => setIsOpen(false)} />
            <CustomLink href="/articles" title="Articles" className="my-2" onClick={() => setIsOpen(false)} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <SocialIcons />
            <ThemeToggle />
          </nav>
        </div>
      )}

      {/* Logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}
