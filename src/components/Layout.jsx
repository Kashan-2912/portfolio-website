import React from 'react'

const Layout = ({children, className}) => {

  // footer padding khrab cuz of opposite respnsive clsases ... make sure to give each coe to gpt to have responsiveness instead of watching yt
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout