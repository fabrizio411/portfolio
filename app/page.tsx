import About from '@/components/sections/About'
import Personal from '@/components/sections/Personal'
import Projects from '@/components/sections/Projects'
import React from 'react'

const HomePage = () => {
  return (
    <main className='py-20 m-auto max-w-[900px] w-full px-8'>
      <Personal />
      <About />
      <Projects />
    </main>
  )
}

export default HomePage