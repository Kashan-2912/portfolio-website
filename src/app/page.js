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
              <Image alt="Kashan" src="/ME.png" width={400} height={300} />
            </div>

            <div className="w-1/2">
              <h1>Turning Vision Into Reality With Code And Design.</h1>
              <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            </div>
          </div>
        </Layout>
      </h1>
    </div>
  );
}
