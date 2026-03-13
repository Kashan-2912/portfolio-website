import React from 'react'

const Layout = ({children, className}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout
