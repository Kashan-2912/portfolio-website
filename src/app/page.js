import AnimatedDivLogo from "@/components/AnimatedDivLogo";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kashan | Home Page</title>
        <meta
          name="description"
          content="Is your website struggling to load quickly? You've come to the right profile. When you connect with Muhammad Kashan Ashraf, you're not just hiring a developer or a designer—you're gaining a partner committed to bringing your vision to life. With a rich blend of technical skills and creative design expertise, I ensure that every project is functional, visually stunning, and user-friendly. My holistic approach provides comprehensive solutions tailored to your specific needs. Clear communication, timely delivery, and exceptional quality are the hallmarks of my work. Partnering with me means your project is in capable hands, driving your business forward with innovative and efficient digital solutions. Discover List of projects Kashan has made."
        />
      </Head>

      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen font-montserrat">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <div className="relative w-full h-[560px]">
                <Image alt="Kashan" src="/ME.png" fill className="object-contain" />
              </div>

            </div>

            <div className="w-1/2 flex flex-col items-center self-center">

              {/* media queries wrong... go gpt and ask it to fix */}
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="pb-2 !text-6xl !text-left xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl" />

              <p className="my-4 text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js, NextJS and web development.
              </p>

              <div className="flex items-center self-start mt-2">
                <Link href="/Kashan_Resume.pdf" target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark hover:bg-light border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} /></Link>
                <Link href="mailto:mkashan2912@gmail.com" target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <AnimatedDivLogo />
      </main>
    </>
  );
}
