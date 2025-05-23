import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Kashan | About Page</title>
        <meta
          name="description"
          content="Is your website struggling to load quickly? You've come to the right profile. When you connect with Muhammad Kashan Ashraf, you're not just hiring a developer or a designer—you're gaining a partner committed to bringing your vision to life. With a rich blend of technical skills and creative design expertise, I ensure that every project is functional, visually stunning, and user-friendly. My holistic approach provides comprehensive solutions tailored to your specific needs. Clear communication, timely delivery, and exceptional quality are the hallmarks of my work. Partnering with me means your project is in capable hands, driving your business forward with innovative and efficient digital solutions."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className={"pt-16"}>
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16"/>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark opacity-75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Kashan, a web developer and designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With over 2 years of self learning experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-4">
                {" "}
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, custom solutions or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            {/* profile pic */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
                <img src={'/Kashan.jpg'} alt="Kashan" className="w-full h-auto rounded-2xl" />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                        <AnimatedNumber value={5} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clients</h2>
                </div>

                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                         <AnimatedNumber value={10} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">projects completed</h2>
                </div>

                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                         <AnimatedNumber value={2} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">years of experience</h2>
                </div>

            </div>
          </div>

        <Skills />
        <Experience />
        <Education />
        </Layout>
      </main>
    </>
  );
};

export default page;
