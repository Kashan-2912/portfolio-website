import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TransitionEffect } from "@/components/transition-effect"
import { AnimatedText } from "@/components/animated-text"
import { HireMe } from "@/components/hire-me"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <article className="flex min-h-screen items-center text-foreground dark:text-background sm:items-start">
          <div className="z-0 inline-block h-full w-full bg-background p-32 dark:bg-background xl:p-24 lg:p-16 md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16">
            <div className="flex w-full items-start justify-between md:flex-col">
              <div className="w-1/2 lg:hidden md:inline-block md:w-full">
                <Image
                  src="/placeholder.svg?height=580&width=580"
                  alt="CodeBucks"
                  width={580}
                  height={580}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text="Turning vision into reality with code and design."
                  className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                  As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                  Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
                <div className="mt-2 flex items-center self-start lg:self-center">
                  <Link
                    href="/dummy.pdf"
                    target="_blank"
                    className="flex items-center rounded-lg border-2 border-solid bg-foreground p-2.5 px-6 text-lg font-semibold capitalize text-background hover:border-foreground hover:bg-transparent hover:text-foreground dark:bg-background dark:text-foreground dark:hover:border-background dark:hover:bg-foreground dark:hover:text-background md:p-2 md:px-4 md:text-base"
                    download={true}
                  >
                    Resume
                    <ArrowUpRight className="ml-1 !w-6 md:!w-4" />
                  </Link>
                  <Link
                    href="mailto:codebucks27@gmail.com"
                    className="ml-4 text-lg font-medium capitalize text-foreground underline dark:text-background md:text-base"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <HireMe />
          <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
            <Image
              src="/placeholder.svg?height=65&width=38"
              alt="Codebucks"
              width={38}
              height={65}
              className="relative h-auto w-full"
            />
          </div>
        </article>
        <Footer />
      </main>
    </>
  )
}
