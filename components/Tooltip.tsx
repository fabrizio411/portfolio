import React, { ComponentProps } from 'react'
import { RiTriangleFill } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'

const Tooltip = ({ label, className, children, ...props }: ComponentProps<'div'> & { label: string }) => {
  return (
    <div className={twMerge('relative group', className)}>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-0 group-hover:bottom-[135%] -z-20 group-hover:z-10 opacity-0 group-hover:opacity-100 transition-all bg-zinc-700 dark:bg-zinc-400 rounded-md px-2 py-1'>
        <p className='text-dark-text-1 dark:text-text-1 text-nowrap'>{label}</p>
        <RiTriangleFill className='absolute top-[85%] rotate-180 left-1/2 -translate-x-1/2 fill-zinc-700 dark:fill-zinc-400' />
      </div>
      {children}
    </div>
  )
}

export default Tooltip