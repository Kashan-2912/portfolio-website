import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TransitionEffect } from "@/components/transition-effect"
import { AnimatedText } from "@/components/animated-text"
import { FeaturedProject, Project } from "@/components/projects/project-card"

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-background">
        <Navbar />
        <div className="z-0 inline-block h-full w-full bg-background p-32 dark:bg-background xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                github="https://github.com/codebucks27/CryptoBucks-Final-Code"
                type="Featured Project"
                img="/placeholder.svg?height=720&width=1280"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="NFT collection Website"
                link="https://devdreaming.com/videos/create-nft-collection-website-reactjs"
                github="https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code"
                type="Website Template"
                img="/placeholder.svg?height=720&width=1280"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Fashion Studio Website"
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
                type="Website"
                img="/placeholder.svg?height=720&width=1280"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                link="https://devdreaming.com/videos/build-stunning-portfolio-website-react-js-framer-motion"
                github="https://github.com/codebucks27/react-portfolio-final"
                type="Portfolio Website"
                img="/placeholder.svg?height=720&width=1280"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Agency Website Template"
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
                type="Website Template"
                img="/placeholder.svg?height=720&width=1280"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="DevDreaming"
                link="https://devdreaming.com/"
                github="https://github.com/codebucks27"
                type="Blog Website"
                img="/placeholder.svg?height=720&width=1280"
              />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
