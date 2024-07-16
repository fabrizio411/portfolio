'use client'

import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className='relative'>
      <div className='h-fit z-20 absolute pos-center' onClick={handleOpen}>
        {!open ? 
          <IoMenu className='w-8 h-8' /> 
        : 
          <IoClose className='w-8 h-8' />
        }
      </div>

      <div onClick={handleOpen} className={twMerge(
        'hidden fixed top-0 left-0 w-full h-full',
        open && 'block'
      )} />

      <nav className={twMerge(
        'overflow-hidden opacity-0 bg-red-400 rounded-md absolute -z-10 w-menu md:w-72 h-44 -top-6 -right-6 p-4 transition-all flex items-end',
        open && 'opacity-100 z-10'
      )}>
        <ul className={twMerge(open ? 'block' : 'hidden')}>
          <li><a className='pt-1 inline-block'>Inicio</a></li>
          <li><a className='pt-1 inline-block'>Sobre mi</a></li>
          <li><a className='pt-1 inline-block'>Proyectos</a></li>
          <li><a className='pt-1 inline-block'>Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu