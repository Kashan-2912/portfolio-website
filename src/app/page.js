import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen font-montserrat">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <div className="relative w-full h-screen">
                <Image alt="Kashan" src="/ME.png" fill className="object-contain" />
              </div>

            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left" />
              <p className="my-4 text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
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
    </main>
  );
}
