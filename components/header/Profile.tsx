import Image from 'next/image'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProfileProps {
  big?: boolean
}

const Profile: React.FC<ProfileProps & ComponentProps<'div'>> = ({ big, className, ...props }) => {
  return (
    <div className='border-2 border-secondary dark:border-accent rounded-full'>
      <div className={twMerge(
        'relative rounded-full overflow-hidden border-4  border-white dark:border-zinc-600  shadow-md', 
        big && 'border-[10px] shadow-lg',
        className
      )} {...props}>
        <div className='absolute w-full h-full pos-center bg-zinc-300 dark:bg-zinc-800' />
        <Image alt='foto' src={'/foto.jpg'} fill />
      </div>
    </div>
  )
}

export default Profile