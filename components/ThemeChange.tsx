'use client'

import { ComponentProps, useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeChange = ({ className }: ComponentProps<'div'>) => {
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
    <div onClick={changeTheme}>
      {darkTheme ? 
        <FaMoon className='w-6 h-6 fill-white' />
      :
        <FaSun className='w-6 h-6 fill-black' />      
      }
    </div>
  )
}

export default ThemeChange