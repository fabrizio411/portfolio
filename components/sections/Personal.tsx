import React from 'react'
import Profile from '../header/Profile'

const Personal = () => {
  return (
    <section className='pt-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 border-b border-zinc-900 dark:border-zinc-500 pb-12 border-dotted' id='personal'>
      <Profile className='w-52 h-52 -z-10' big />
      <div className='text-center md:text-start'>
        <h2 className='text-2xl md:text-4xl font-bold'>Fabrizio Mourglia</h2>
        <p className='md:text-xl md:mt-2 dark:text-dark-text-2'>Desarrollador web orientado a Frontend</p>
      </div>
    </section>
  )
}

export default Personal