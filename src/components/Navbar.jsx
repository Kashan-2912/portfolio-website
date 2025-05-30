"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from "./Icons";
import { motion } from "framer-motion";

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

const Navbar = () => {
  return (
    <header className="font-montserrat w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href={"/"} title={"Home"} className="mr-4" />
        <CustomLink href={"/about"} title={"About"} className="mx-4" />
        <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
        <CustomLink href={"/articles"} title={"Articles"} className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://x.com/itzKashan2912" target="_blank"
        whileHover={{y: -2}}
        whileTap={{scale: 0.9}}
        className="w-6 mx-3"
        >
          <img src="/x.svg" alt="X" />
        </motion.a>
        <motion.a href="https://github.com/Kashan-2912/" target="_blank"
        whileHover={{y: -2}}
        whileTap={{scale: 0.9}}
        className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/muhammad-kashan-ashraf/" target="_blank"
        whileHover={{y: -2}}
        whileTap={{scale: 0.9}}
        className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://itzkashan.medium.com/" target="_blank"
        whileHover={{y: -2}}
        whileTap={{scale: 0.9}}
        className="w-6 mx-3"
        >
          <img src="/medium.svg" alt="X" />
        </motion.a>
        <motion.a href="https://dribbble.com/Kashan2912" target="_blank"
        whileHover={{y: -2}}
        whileTap={{scale: 0.9}}
        className="w-6 mx-3"
        >
          <DribbbleIcon />
        </motion.a>

        <motion.a href="https://www.upwork.com/freelancers/~01ec288c31651818ea" target="_blank"
        whileHover={{y: -2}}
        whileTap={{scale: 0.9}}
        className="w-6 mx-3"
        >
          <img src="/upwork.svg" alt="X" />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
