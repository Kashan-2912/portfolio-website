import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TransitionEffect } from "@/components/transition-effect"
import { AnimatedText } from "@/components/animated-text"
import { FeaturedArticle, Article } from "@/components/articles/article-card"

export default function Articles() {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-background overflow-hidden">
        <Navbar />
        <div className="z-0 inline-block h-full w-full bg-background p-32 dark:bg-background xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-16">
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <li>
              <FeaturedArticle
                title="build a custom pagination component in reactjs from scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="https://devdreaming.com/blogs/create-pagination-component-reactjs"
                img="/placeholder.svg?height=720&width=1280"
              />
            </li>
            <li>
              <FeaturedArticle
                title="creating stunning loading screens in react: Build 3 types of loading screens"
                summary="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
                time="10 min read"
                link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
                img="/placeholder.svg?height=720&width=1280"
              />
            </li>
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">All Articles</h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="form validation in reactjs: build a reusable custom hook for inputs and error handling"
              date="January 27, 2023"
              link="https://devdreaming.com/blogs/react-form-validation-custom-hook"
              img="/placeholder.svg?height=720&width=1280"
            />
            <Article
              title="silky smooth scrolling in reactjs: a step-by-step guide for react developers"
              date="January 30, 2023"
              link="https://devdreaming.com/blogs/smooth-scrolling-in-react-js"
              img="/placeholder.svg?height=720&width=1280"
            />
            <Article
              title="creating an efficient modal component in react using hooks and portals"
              date="January 29, 2023"
              link="https://devdreaming.com/blogs/create-efficient-modal-react-portals"
              img="/placeholder.svg?height=720&width=1280"
            />
            <Article
              title="build a fabulous todo list app with react, redux and framer-motion"
              date="January 28, 2023"
              link="https://devdreaming.com/blogs/build-react-redux-framer-motion-todo-app"
              img="/placeholder.svg?height=720&width=1280"
            />
            <Article
              title="redux simplified: a beginner's guide for web developers"
              date="January 31, 2023"
              link="https://devdreaming.com/blogs/redux-simply-explained"
              img="/placeholder.svg?height=720&width=1280"
            />
            <Article
              title="what is higher order component (hoc) in react?"
              date="January 4, 2023"
              link="https://devdreaming.com/blogs/higher-order-component-hoc-react"
              img="/placeholder.svg?height=720&width=1280"
            />
          </ul>
        </div>
        <Footer />
      </main>
    </>
  )
}
