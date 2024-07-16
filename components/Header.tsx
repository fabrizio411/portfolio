'use client'

import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import Menu from './Menu';

const Header = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  const changeTheme = () => {
    setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    const htmlRef = document.querySelector('html')
    if (htmlRef) {
      console.log('first')
      if (darkTheme) {
        htmlRef.classList.add('dark')
      } else {
        htmlRef.classList.remove('dark')
      }
    }
  }, [darkTheme])

  return (
    <header className='fixed top-0 left-0 w-full'>
      <div className='py-6 m-auto max-w-[800px] w-full px-8 flex justify-between items-center'>
        <div onClick={changeTheme} className=''>
          {darkTheme ? 
            <FaMoon className='w-6 h-6 fill-white' />
          :
            <FaSun className='w-6 h-6 fill-black' />      
          }
        </div>

        <Menu />
      </div>
    </header>
  )
}

export default Header