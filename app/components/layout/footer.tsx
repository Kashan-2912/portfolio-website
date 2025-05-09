import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-foreground font-medium text-lg dark:border-foreground sm:text-base">
      <div className="z-0 inline-block h-full w-full bg-background p-32 dark:bg-background xl:p-24 lg:p-16 md:p-12 sm:p-8 py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} © All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built with
          <span className="text-primary text-2xl px-1 dark:text-primary-dark">♡</span>
          by
          <Link href="https://devdreaming.com/" target="_blank" className="underline underline-offset-2 ml-1">
            CodeBucks
          </Link>
        </div>
        <Link href="https://devdreaming.com/about" target="_blank" className="underline underline-offset-2">
          Say Hello
        </Link>
      </div>
    </footer>
  )
}
