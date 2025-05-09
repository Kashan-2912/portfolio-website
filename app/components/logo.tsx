import Link from "next/link"

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <Link
        href="/"
        className="flex items-center justify-center rounded-full w-16 h-16 bg-foreground text-background dark:border-2 dark:border-solid dark:border-background text-2xl font-bold"
      >
        CB
      </Link>
    </div>
  )
}
