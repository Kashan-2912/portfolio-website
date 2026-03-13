import AnimatedDivLogo from "@/components/AnimatedDivLogo";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark dark:text-light w-full min-h-[calc(100vh-120px)] font-montserrat">
        <Layout className="!pt-0">
          {/* Desktop Layout (lg and up) */}
          <div className="hidden lg:flex items-center justify-between w-full gap-8">
            <div className="w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg h-[500px] xl:h-[560px] 2xl:h-[620px]">
                <Image alt="Kashan" src="/ME.png" fill className="object-contain" priority />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-start self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl xl:!text-6xl !text-left"
              />
              <p className="my-4 text-base xl:text-lg font-medium">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js, NextJS and web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Kashan_Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light transition-colors duration-300"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:mkashan2912@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Tablet & Mobile Layout (below lg) */}
          <div className="flex lg:hidden flex-col items-center justify-center w-full pt-4">
            <div className="w-full flex justify-center mb-6">
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]">
                <Image alt="Kashan" src="/ME.png" fill className="object-contain" priority />
              </div>
            </div>
            <div className="w-full flex flex-col items-center text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-3xl sm:!text-4xl md:!text-5xl !text-center"
              />
              <p className="my-3 text-sm sm:text-base font-medium max-w-xl">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js, NextJS and web development.
              </p>
              <div className="flex items-center justify-center mt-3 gap-4">
                <Link
                  href="/Kashan_Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2 px-5 sm:p-2.5 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light transition-colors duration-300"
                  download={true}
                >
                  Resume <LinkArrow className={"w-5 ml-1"} />
                </Link>
                <Link
                  href="mailto:mkashan2912@gmail.com"
                  target="_blank"
                  className="text-sm sm:text-base font-medium capitalize text-dark dark:text-light underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="hidden lg:block">
          <AnimatedDivLogo />
        </div>
        <div className="hidden lg:block">
          <HireMe />
        </div>
      </main>
    </>
  );
}
