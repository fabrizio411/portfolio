import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface LinkButtonProps {
  href: string
}

const LinkButton: React.FC<LinkButtonProps & ComponentProps<'button'>> = ({ href, children, className }) => {
  return (
    <Link
      className={twMerge('inline-block bg-det-1 hover:bg-det-1/80 transition-colors px-4 py-2 rounded-md', className)}
      href={href}
    >
      {children}
    </Link>
  )
}

export default LinkButton