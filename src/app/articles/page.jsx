import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { fetchMediumArticles } from "@/lib/fetchMedium";
import Image from "next/image";

const Article = ({ img, title, time, summary, link, categories }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark" />
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
          className="hover:scale-103 quick duration-300 rounded-lg"
          loading="lazy"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2">{summary}</p>

      <span className="flex flex-wrap gap-2">
        {categories.map((category, idx) => (
          <span
            key={idx}
            className="capitalize text-primary font-semibold bg-primary/20 py-1 px-3 rounded-full cursor-default select-none"
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
      <Head>
        <title>Kashan | Articles Page</title>
        <meta
          name="description"
          content="Is your website struggling to load quickly? You've come to the right profile. When you connect with Muhammad Kashan Ashraf, you're not just hiring a developer or a designer—you're gaining a partner committed to bringing your vision to life... On this page, you will see articles written by Muhammad Kashan Ashraf."
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className={"pt-16"}>
          <AnimatedText text="Words Can Change The World!" className="mb-16" />

          <div className="p-8 w-full">
            <ul className="grid grid-cols-2 gap-16">
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
