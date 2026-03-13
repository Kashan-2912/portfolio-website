import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-sm sm:text-base lg:text-lg dark:text-light'>
        <div className='py-6 sm:py-8 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
              Built with <span className='text-primary dark:text-primary-dark text-xl sm:text-2xl px-1'>&#9825;</span>by&nbsp;Kashan
            </div>
            <Link href={"mailto:mkashan2912@gmail.com"} className='underline underline-offset-2'>Say Hello</Link>
        </div>
    </footer>
  )
}

export default Footer
