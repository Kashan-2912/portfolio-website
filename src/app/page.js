import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="flex items-center text-dark w-full min-h-screen font-montserrat">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <div className="relative w-full h-screen">
                <Image alt="Kashan" src="/ME.png" fill className="object-contain" />
              </div>

            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left" />
              <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            </div>
          </div>
        </Layout>
      </h1>
    </div>
  );
}
