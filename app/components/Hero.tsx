// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
      <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16">
        <div className="flex w-full items-start justify-between md:flex-col">
          {/* Left: Profile Image */}
          <div className="w-1/2 lg:hidden md:inline-block md:w-full">
            <Image
              src="/developer-pic-1.png"
              alt="Developer"
              width={580}
              height={580}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* Right: Content */}
          <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
            <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0">
              <h1 className="text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-dark dark:text-light font-bold capitalize">
                <span>Turning </span>
                <span>vision </span>
                <span>into </span>
                <span>reality </span>
                <span>with </span>
                <span>code </span>
                <span>and </span>
                <span>design.</span>
              </h1>
            </div>
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>

            {/* CTA Buttons */}
            <div className="mt-2 flex items-center self-start lg:self-center">
              <a
                href="/dummy.pdf"
                download
                target="_blank"
                className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="ml-1 w-6 md:w-4 h-auto"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                  />
                </svg>
              </a>

              <Link
                href="mailto:codebucks27@gmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;
