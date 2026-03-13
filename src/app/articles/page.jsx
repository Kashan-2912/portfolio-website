import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { fetchMediumArticles } from "@/lib/fetchMedium";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";

const Article = ({ img, title, time, summary, link, categories }) => {
  return (
    <li className="relative flex flex-col justify-between col-span-1 w-full p-4 sm:p-5 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
      >
        <Image
          src={img}
          alt={title}
          width={700}
          height={400}
          className="hover:scale-103 transition-transform duration-300 rounded-lg"
          loading="lazy"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-lg sm:text-xl lg:text-2xl font-bold my-2 mt-4 hover:underline dark:text-light">
          {title}
        </h2>
      </Link>

      <p className="text-xs sm:text-sm mb-2 dark:text-light/80">{summary}</p>

      <span className="flex flex-wrap gap-1.5 sm:gap-2">
        {categories.map((category, idx) => (
          <span
            key={idx}
            className="capitalize text-primary dark:text-primary-dark font-semibold bg-primary/20 dark:bg-primary-dark/20 py-0.5 px-2 sm:py-1 sm:px-3 rounded-full cursor-default select-none text-xs sm:text-sm"
          >
            {category}
          </span>
        ))}
      </span>
    </li>
  );
};

export default async function Page() {
  const articles = await fetchMediumArticles();

  return (
    <>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className={"pt-8 sm:pt-12 lg:pt-16 pb-8"}>
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-8 sm:mb-12 lg:mb-16 !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl"
          />

          <div className="w-full pr-4 pb-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {articles.map((article, idx) => (
                <Article
                  key={idx}
                  img={article.image || "/fallback-image.png"}
                  title={article.title}
                  time={article.pubDate}
                  categories={article.categories}
                  summary={article.content}
                  link={article.link}
                />
              ))}
            </ul>
          </div>
        </Layout>
      </main>
    </>
  );
}
