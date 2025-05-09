import Link from "next/link"
import Image from "next/image"

interface FeaturedArticleProps {
  img: string
  title: string
  time: string
  summary: string
  link: string
}

export const FeaturedArticle = ({ img, title, time, summary, link }: FeaturedArticleProps) => {
  return (
    <article className="relative w-full p-4 col-span-1 bg-background border border-foreground border-solid rounded-2xl dark:bg-background dark:border-background">
      <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-foreground -z-10"></div>
      <Link href={link} target="_blank" className="inline-block rounded-lg overflow-hidden w-full">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          width={1280}
          height={720}
          className="w-full h-auto"
          priority
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primary-dark">{time}</span>
    </article>
  )
}

interface ArticleProps {
  title: string
  date: string
  link: string
  img: string
}

export const Article = ({ title, date, link, img }: ArticleProps) => {
  return (
    <li className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between bg-background text-foreground first:mt-0 border border-solid border-foreground border-r-4 border-b-4 dark:bg-background dark:border-background">
      <Link href={link} target="_blank" className="relative">
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-background md:text-lg xs:text-base">
          {title}
        </h2>
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          width={1280}
          height={720}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
        />
      </Link>
      <span className="text-primary font-semibold dark:text-primary-dark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </li>
  )
}
