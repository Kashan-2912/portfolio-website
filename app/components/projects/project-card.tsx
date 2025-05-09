import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

interface ProjectProps {
  type: string
  title: string
  summary?: string
  img: string
  link: string
  github: string
}

export const FeaturedProject = ({ type, title, summary, img, link, github }: ProjectProps) => {
  return (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-foreground bg-background p-12 shadow-2xl dark:border-background dark:bg-background lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-foreground dark:bg-background xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"></div>
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          width={1280}
          height={720}
          className="h-auto w-full"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primary-dark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 rounded-md font-medium text-foreground dark:text-background sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10" aria-label={`${title} github link`}>
            <Github className="w-full h-auto" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-foreground p-2 px-6 text-lg font-semibold text-background dark:bg-background dark:text-foreground sm:px-4 sm:text-base"
            aria-label={title}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

export const Project = ({ type, title, img, link, github }: ProjectProps) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-foreground bg-background p-6 shadow-2xl dark:border-background dark:bg-background xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-foreground dark:bg-background md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image src={img || "/placeholder.svg"} alt={title} width={1280} height={720} className="h-auto w-full" />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primary-dark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded text-lg font-medium underline md:text-base"
            aria-label={title}
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6" aria-label={title}>
            <Github className="w-full h-auto" />
          </Link>
        </div>
      </div>
    </article>
  )
}
