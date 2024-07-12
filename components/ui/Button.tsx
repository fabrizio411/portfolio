import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const Button: React.FC<ComponentProps<'button'>> = ({ className, children, ...props }) => {
  return (
    <button
      className={twMerge('inline-block bg-det-1 hover:bg-det-1/80 transition-colors px-4 py-2 rounded-md', className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button