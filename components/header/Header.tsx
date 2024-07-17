'use client'

import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import ThemeChange from './ThemeChange';
import Profile from './Profile';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <header className='fixed top-0 left-0 w-full'>
      <div className='m-auto max-w-[800px] w-full px-8 h-20 flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <Profile className='w-14 h-14' />
          <h1 className='font-semibold text-lg md:text-xl text-text-2 dark:text-dark-text-2'>Fabrizio M</h1>
        </div>

        <div className='relative w-6'>
          <div className='h-fit z-30 absolute pos-center' onClick={handleOpen}>
            {!open ? 
              <IoMenu className='w-8 h-8 fill-text-1 dark:fill-dark-text-1' />
            : 
              <IoClose className='w-8 h-8 fill-text-1 dark:fill-dark-text-1' />
            }
          </div>

          <div onClick={handleOpen} className={twMerge(
            'hidden fixed top-0 left-0 w-full h-full',
            open && 'block'
          )} />

          <nav className={twMerge(
            'overflow-hidden opacity-0 bg-secondary dark:bg-accent rounded-md absolute -z-10 w-menu md:w-72 h-48 -top-6 -right-6 p-4 transition-all flex items-end justify-start',
            open && 'opacity-100 z-20'
          )}>
            <ThemeChange className={twMerge(
              'absolute top-3 left-3',
              open ? 'block' : 'hidden'
            )} />
            <ul className={twMerge(open ? 'block' : 'hidden')}>
              <li><a className='pt-1 inline-block'>Inicio</a></li>
              <li><a className='pt-1 inline-block'>Sobre mi</a></li>
              <li><a className='pt-1 inline-block'>Proyectos</a></li>
              <li><a className='pt-1 inline-block'>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header