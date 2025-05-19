import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={'fill-dark animate-pulse-wiggle'} />

            <Link href='mailto:mkashan2912@gmail.com'
            className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light font-semibold shadow-md border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark hover:border-1 ease-in duration-300'
            >
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe