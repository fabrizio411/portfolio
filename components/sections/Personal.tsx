import React from 'react'
import Profile from '../header/Profile'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Personal = () => {
  return (
    <section className='pt-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 border-b border-zinc-900 dark:border-zinc-500 pb-12 border-dotted' id='personal'>
      <Profile className='w-52 h-52 -z-10' big />
      <div className='text-center md:text-start'>
        <h2 className='text-2xl md:text-4xl font-bold'>Fabrizio Mourglia</h2>
        <p className='md:text-xl md:mt-2 dark:text-dark-text-2'>Desarrollador web orientado a Frontend</p>
        <div className='flex gap-4 mt-3'>
          <Link href={'https://www.linkedin.com/in/fabrizio-mourglia-4a7427276/'} target='_blank'>
            <FaLinkedin className='w-8 h-8 fill-text-1 dark:fill-dark-text-1' />
          </Link>
          <Link href={'https://github.com/fabrizio411'} target='_blank'>
            <FaGithub className='w-8 h-8 fill-text-1 dark:fill-dark-text-1' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Personal