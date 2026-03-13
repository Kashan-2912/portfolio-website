import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";
import React from "react";

const FeatureProject = ({ type, title, summary, img, link, github, tech }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 -right-2 w-full h-full rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light translate-x-1 translate-y-1" />
      <article className="relative w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 sm:p-8 lg:p-10 xl:p-12">
        <Link
          href={link}
          target="_blank"
          className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg shrink-0"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <div className="w-full lg:w-1/2 flex flex-col items-start justify-between mt-6 lg:mt-0 lg:pl-6 min-w-0">
          <span className="text-primary dark:text-primary-dark font-medium text-base sm:text-lg lg:text-xl">{type}</span>

          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2 max-w-full"
          >
            <h2 className="my-2 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-light break-words">{title}</h2>
          </Link>

          <p className="my-2 font-medium text-dark dark:text-light/80 text-sm sm:text-base">{summary}</p>

          <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3">
            <div className="flex items-center shrink-0">
              <Link
                href={github}
                target="_blank"
                className="w-8 sm:w-10 hover:scale-110 duration-300"
              >
                <GithubIcon />
              </Link>

              <Link
                href={link}
                target="_blank"
                className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-4 sm:px-6 text-sm sm:text-base lg:text-lg font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light duration-300"
              >
                Visit
              </Link>
            </div>

            <div className="flex items-center flex-wrap gap-1">
              {tech.map((Icon, index) => (
                <div key={index} className="rounded-full p-1 hover:scale-110 duration-300">
                  <img src={Icon} alt="Tech" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const Project = ({ type, title, img, link, github, tech }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 -right-2 w-full h-full rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light translate-x-1 translate-y-1" />
      <article className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-4 sm:p-6">
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4 min-w-0">
          <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-1 mt-2">
            <span className="text-primary dark:text-primary-dark font-medium text-sm sm:text-base lg:text-lg">
              {type}
            </span>
            <div className="flex items-center flex-wrap gap-1">
              {tech.map((Icon, index) => (
                <div
                  key={index}
                  className="rounded-full p-0.5 hover:scale-110 duration-300"
                >
                  <img src={Icon} alt="Tech" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2 max-w-full"
          >
            <h2 className="my-2 text-left text-lg sm:text-xl lg:text-2xl font-bold dark:text-light break-words">{title}</h2>
          </Link>

          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-4 sm:px-6 text-sm sm:text-base font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light duration-300"
            >
              Visit
            </Link>

            <Link
              href={github}
              target="_blank"
              className="w-7 sm:w-8 hover:scale-110 duration-300"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const page = () => {
  return (
    <>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className={"pt-8 sm:pt-12 lg:pt-16 pb-12"}>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-8 sm:mb-12 lg:mb-16 !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 gap-y-10 sm:gap-y-14 md:gap-y-20 lg:gap-y-28">
            <div className="col-span-1 md:col-span-12">
              <FeatureProject
                type="Featured Project"
                title="SmartFlex"
                summary="SmartFlex is an AI-powered fitness training app that generates personalized workout and diet plans in real-time through voice interaction. Built with cutting-edge tools like NextJS, TailwindCSS, Vapi AI, Gemini, Convex, and Clerk, SmartFlex is your go-to fitness companion – for FREE!"
                img="/smartflex.png"
                link="http://smartflex-xi.vercel.app/"
                github="https://github.com/Kashan-2912/smartflex"
                tech={[
                  "/nextjs.svg",
                  "/gemini.svg",
                  "/tailwindcss.svg",
                  "/clerk.svg",
                  "/shadcn.svg",
                ]}
              />
            </div>

            <div className="col-span-1 md:col-span-12">
              <FeatureProject
                type="Open Source · 40+ Stars"
                title="GitQuest"
                summary="Summon the creature behind your code. GitQuest transforms any GitHub profile into a unique D&D-inspired fantasy creature powered by Google Gemini AI. Creatures scale from CR 0 to CR 20+ based on contribution history, with stunning 3D card effects, a global leaderboard, and an embeddable GitHub README widget to showcase your creature."
                img="/gitquest.png"
                link="https://gitquest.is-a.software/"
                github="https://github.com/Kashan-2912/gitquest"
                tech={[
                  "/nextjs.svg",
                  "/tailwindcss.svg",
                  "/gemini.svg",
                  "/neondb.svg",
                  "/shadcn.svg",
                  "/vercel.svg",
                ]}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <Project
                type="Text to Image"
                title="ArtLab"
                img="/artlab.png"
                link="https://artlab-seven.vercel.app/"
                github="https://github.com/Kashan-2912/artlab"
                tech={[
                  "/nextjs.svg",
                  "/tailwindcss.svg",
                  "/gemini.svg",
                  "/appwrite.svg",
                  "/framermotion.svg",
                  "/shadcn.svg",
                ]}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <Project
                type="e-LMS"
                title="Learnify"
                img="/learnify.png"
                link="https://learnify-skillup.netlify.app/"
                github="https://github.com/Kashan-2912/Learnify-Skillup"
                tech={["/react.svg", "/tailwindcss.svg", "/firebase.svg"]}
              />
            </div>

            <div className="col-span-1 md:col-span-12">
              <FeatureProject
                type="AI Project"
                title="VizioRoom"
                summary="AI Powered Interior Designer where users can upload screenshot of any type of room and get redesigned room with AI results based on custom pre defined options. Built with NextJS, TailwindCSS, Clerk, Replicate, NeonDB, Appwrite, Paddle Payments."
                img="/vizio.png"
                link="https://vizio-room-designer.vercel.app/"
                github="https://github.com/Kashan-2912/ai-interior-designer"
                tech={[
                  "/nextjs.svg",
                  "/tailwindcss.svg",
                  "/clerk.svg",
                  "/replicate.svg",
                  "/neondb.svg",
                  "/appwrite.svg",
                  "/paddle.svg",
                ]}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <Project
                type="e-Commerce"
                title="EzyShopper"
                img="/ezyshopper.png"
                link="https://ezyshopper.vercel.app/"
                github="https://github.com/Kashan-2912/EzyShopper"
                tech={[
                  "/mongodb.svg",
                  "/express.svg",
                  "/react.svg",
                  "/node.svg",
                  "/tailwindcss.svg",
                  "/redis.svg",
                  "/stripe.svg",
                ]}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <Project
                type="NextJS Project"
                title="Moodify"
                img="/moodify.png"
                link="https://moodify-moods.netlify.app/"
                github="https://github.com/Kashan-2912/Moodify"
                tech={[
                  "/nextjs.svg",
                  "/react.svg",
                  "/firebase.svg",
                  "/tailwindcss.svg",
                ]}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <Project
                type="Movies Website"
                title="Filmpire"
                img="/filmpire.png"
                link="https://filmpire-movies-app.netlify.app/"
                github="https://github.com/Kashan-2912/Filmpire-Movie-App"
                tech={["/react.svg", "/css.svg"]}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <Project
                type="GSAP Project"
                title="Cyberfiction Clone"
                img="/cyberfiction.png"
                link="https://cyberfiction-clone1.netlify.app/"
                github="https://github.com/Kashan-2912/Cyberfiction-clone"
                tech={["/html.svg", "/javascript.svg", "/css.svg", "/gsap.svg"]}
              />
            </div>

            <div className="col-span-1 md:col-span-12">
              <FeatureProject
                type="OPEN SOURCE CONTRIBUTION"
                title="Clario Docs"
                summary="Transform Your API Specs into Beautiful Docs. Upload your OpenAPI or Postman collection and let our AI transform it into comprehensive, beautiful documentation in seconds. No coding required. Built with NextJS, TailwindCSS, MDX-React, Supabase, Framer Motion, OpenRouter API."
                img="/clario.png"
                link="https://clario-roan.vercel.app/"
                github="https://github.com/rasenga223/clariodocs-api-documentation-generator"
                tech={[
                  "/nextjs.svg",
                  "/tailwindcss.svg",
                  "/supabase.svg",
                  "/framermotion.svg",
                  "/shadcn.svg",
                  "/chatgpt.svg",
                ]}
              />
            </div>

            <div className="col-span-1 md:col-span-12">
              <FeatureProject
                type="Developer Tool"
                title="Share Pad"
                summary="A modern, ephemeral collaborative notepad that lives entirely in the URL. Content is compressed with LZ-String and stored in the URL hash — no database, no login, zero friction. Features rich text editing via Slate.js, one-click export to .txt, .md, or .html, secure read-only sharing, and a premium dark-first UI with electric border animations, magnetic cursor effects, and a liquid metal logo."
                img="/sharepad.png"
                link="https://share-mypad.vercel.app/"
                github="https://github.com/Kashan-2912/textarea-share"
                tech={[
                  "/nextjs.svg",
                  "/tailwindcss.svg",
                  "/gsap.svg",
                  "/ts-logo-512.svg",
                ]}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
