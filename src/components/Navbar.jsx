"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isActive ? "w-full" : ""
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  const isActive = pathname === href;

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block w-0 bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isActive ? "w-full" : ""
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  // const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative font-montserrat w-full px-32 py-8 font-medium flex items-center justify-between">
      <button
        className="flex flex-col justify-center items-center lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop */}
      <div className="w-full hidden justify-between items-center lg:flex">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
          <CustomLink href={"/articles"} title={"Articles"} className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://x.com/itzKashan2912"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <img src="/x.svg" alt="X" />
          </motion.a>
          <motion.a
            href="https://github.com/Kashan-2912/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammad-kashan-ashraf/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://itzkashan.medium.com/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <img src="/medium.svg" alt="X" />
          </motion.a>
          <motion.a
            href="https://dribbble.com/Kashan2912"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <DribbbleIcon />
          </motion.a>

          <motion.a
            href="https://www.upwork.com/freelancers/~01ec288c31651818ea"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <img src="/upwork.svg" alt="X" />
          </motion.a>

          {/* <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1 cursor-pointer"
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button> */}
        </nav>
      </div>

      {/* Mobile */}
      {isOpen ? (
        <motion.div 
        className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <nav className="flex ictems-center flex-col justify-center">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Projects"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/articles"}
              title={"Articles"}
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://x.com/itzKashan2912"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-1 sm:mx-3"
            >
              <img src="/x.svg" alt="X" />
            </motion.a>
            <motion.a
              href="https://github.com/Kashan-2912/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 bg-light dark:bg-dark rounded-full mx-1 sm:mx-3"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-kashan-ashraf/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-1 sm:mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://itzkashan.medium.com/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-1 sm:mx-3"
            >
              <img src="/medium.svg" alt="X" />
            </motion.a>
            <motion.a
              href="https://dribbble.com/Kashan2912"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-1 sm:mx-3"
            >
              <DribbbleIcon />
            </motion.a>

            <motion.a
              href="https://www.upwork.com/freelancers/~01ec288c31651818ea"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-1 sm:mx-3"
            >
              <img src="/upwork.svg" alt="X" />
            </motion.a>

            {/* <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1 cursor-pointer"
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button> */}
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;