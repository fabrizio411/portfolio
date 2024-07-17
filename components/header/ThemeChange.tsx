'use client'

import { ComponentProps, useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeChange = ({ className, ...props }: ComponentProps<'div'>) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  const changeTheme = () => {
    setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    const htmlRef = document.querySelector('html')
    if (htmlRef) {
      if (darkTheme) {
        htmlRef.classList.add('dark')
      } else {
        htmlRef.classList.remove('dark')
      }
    }
  }, [darkTheme])

  return (
    <div onClick={changeTheme} className={className} {...props}>
      {darkTheme ? 
        <FaMoon className='w-8 h-8 p-1 fill-dark-text-1' />
      :
        <FaSun className='w-8 h-8 p-1 fill-text-1' />      
      }
    </div>
  )
}

export default ThemeChange