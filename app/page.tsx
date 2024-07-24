import About from '@/components/sections/About'
import Contacto from '@/components/sections/Contacto'
import Personal from '@/components/sections/Personal'
import Projects from '@/components/sections/Projects'
import React from 'react'

const HomePage = () => {
  return (
    <main className='py-20 m-auto max-w-[900px] w-full'>
      <div className='px-8 w-full'>
        <Personal />
        <About />
        <Projects />
        <Contacto />
      </div>
    </main>
  )
}

export default HomePage