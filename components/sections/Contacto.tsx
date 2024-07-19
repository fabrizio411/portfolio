import React from 'react'
import { GoCopy } from 'react-icons/go'
import Tooltip from '../Tooltip'

const Contacto = () => {
  return (
    <section className='mt-28' id='contact'>
      <h2 className='text-3xl font-bold text-center'>Contacto</h2>
      <div className='flex items-center gap-2 mt-6'>
        <p className='bg-zinc-300 dark:bg-zinc-800 py-2 px-6 rounded-md text-xl flex-1'>mourgliafabrizio@gmail.com</p>
        <Tooltip label='Copy link'>
          <button className='py-2 px-2 rounded-md bg-secondary dark:bg-accent'>
            <GoCopy className='w-7 h-7 fill-text-1 dark:fill-dark-text-1' />
          </button>
        </Tooltip>
      </div>
    </section>
  )
}

export default Contacto