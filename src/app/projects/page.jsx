import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const FeatureProject = ({ type, title, summary, img, link, github, tech }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-108 quick duration-300"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>

        <div className="mt-2 flex items-center justify-between w-full">
          {/* Left Side: GitHub + Button */}
          <div className="flex items-center">
            <Link
              href={github}
              target="_blank"
              className="w-10 hover:scale-130 duration-300 quick"
            >
              <GithubIcon />
            </Link>

            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-300 quick"
            >
              Visit
            </Link>
          </div>

          {/* Right Side: Chips */}
          <div className="flex items-center flex-wrap gap-1">
            {tech.map((Icon, index) => (
              <div key={index} className="rounded-full p-1 hover:scale-130 duration-300 quick">
                <img src={Icon} alt="Tech" className="w-8 h-8 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github, tech }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-auto object-cover hover:scale-108 quick duration-300"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <div className="w-full flex items-center justify-between mb-1 mt-2">
          <span className="text-primary font-medium text-xl whitespace-nowrap">
            {type}
          </span>
          <div className="flex items-center flex-wrap gap-1">
            {tech.map((Icon, index) => (
              <div
                key={index}
                className="rounded-full p-1 hover:scale-130 duration-300 quick"
              >
                <img src={Icon} alt="Tech" className="w-8 h-8 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-300 quick"
          >
            Visit
          </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8 hover:scale-130 duration-300 quick"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Kashan | Projects Page</title>
        <meta
          name="description"
          content="Is your website struggling to load quickly? You've come to the right profile. When you connect with Muhammad Kashan Ashraf, you're not just hiring a developer or a designer—you're gaining a partner committed to bringing your vision to life. With a rich blend of technical skills and creative design expertise, I ensure that every project is functional, visually stunning, and user-friendly. My holistic approach provides comprehensive solutions tailored to your specific needs. Clear communication, timely delivery, and exceptional quality are the hallmarks of my work. Partnering with me means your project is in capable hands, driving your business forward with innovative and efficient digital solutions. Discover List of projects Kashan has made."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className={"pt-16"}>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
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

            <div className="col-span-6">
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

            <div className="col-span-6">
              <Project
                type="e-LMS"
                title="Learnify"
                img="/learnify.png"
                link="https://learnify-skillup.netlify.app/"
                github="https://github.com/Kashan-2912/Learnify-Skillup"
                tech={["/react.svg", "/tailwindcss.svg", "/firebase.svg"]}
              />
            </div>

            <div className="col-span-12">
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

            <div className="col-span-6">
              <Project
                type="e-Commerce"
                title="EzyShopper"
                img="/ezyshopper.png"
                link="https://ezyshopper.up.railway.app/"
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

            <div className="col-span-6">
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

            <div className="col-span-6">
              <Project
                type="Movies Website"
                title="Filmpire"
                img="/filmpire.png"
                link="https://filmpire-movies-app.netlify.app/"
                github="https://github.com/Kashan-2912/Filmpire-Movie-App"
                tech={["/react.svg", "/css.svg"]}
              />
            </div>

            <div className="col-span-6">
              <Project
                type="GSAP Project"
                title="Cyberfiction Clone"
                img="/cyberfiction.png"
                link="https://cyberfiction-clone1.netlify.app/"
                github="https://github.com/Kashan-2912/Cyberfiction-clone"
                tech={["/html.svg", "/javascript.svg", "/css.svg", "/gsap.svg"]}
              />
            </div>

            <div className="col-span-12">
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
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
