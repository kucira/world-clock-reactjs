import React from 'react'

type Props = {
    children: React.ReactNode | React.ReactElement
}

export default function Container({ children } : Props) {
  return (
    <div className="container mx-auto h-screen z-10 relative">
        {children}
    </div>
  )
}
