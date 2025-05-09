// components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8">
      {/* Mobile menu toggle */}
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex"
        aria-label="Open menu"
      >
        <span className="sr-only">Open main menu</span>
        <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out -translate-y-0.5"></span>
        <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out opacity-100 my-0.5"></span>
        <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out translate-y-0.5"></span>
      </button>

      {/* Navigation */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <Link href="/" className="mx-4 group relative">
            Home
            <span className="inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-all ease duration-300 dark:bg-light w-full" />
          </Link>
          <Link href="/about" className="mx-4 group relative">
            About
            <span className="inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-all ease duration-300 dark:bg-light w-0" />
          </Link>
          <Link href="/projects" className="mx-4 group relative">
            Projects
            <span className="inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-all ease duration-300 dark:bg-light w-0" />
          </Link>
          <Link href="/articles" className="mx-4 group relative">
            Articles
            <span className="inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-all ease duration-300 dark:bg-light w-0" />
          </Link>
        </nav>
      </div>

      {/* Center Logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Link
          href="/"
          className="flex items-center justify-center rounded-full w-16 h-16 bg-dark text-white dark:border-2 dark:border-light text-2xl font-bold"
        >
          CB
        </Link>
      </div>
    </header>
  );
};

export default Header;
