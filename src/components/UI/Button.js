import React from 'react'
import Link from '../../resolvers/Link'
import clsx from 'clsx'

export default function Button({ className, button, children, ...props }) {
  let buttonStyle = 'group inline-block font-bold text-dark-500 dark:text-white'
  switch (button?.variant) {
    case 'button':
      buttonStyle = `${buttonStyle} rounded-md border-dark-500 border dark:border-white bg-white text-[#2579bceb] dark:bg-white dark:text-black py-3 px-6 text-center dark:hover:bg-transparent hover:bg-[#2579bceb] hover:text-white dark:hover:text-white transition-colors`
      break
    case 'outlined':
      buttonStyle = `${buttonStyle} rounded-md border-dark-500 border dark:border-white py-3 px-6 text-center text-white dark:hover:bg-white hover:bg-white hover:text-[#2579bceb] dark:hover:text-black transition-colors`
      break
    default:
      buttonStyle = `link dark:link-dark rounded-md py-2 px-6 rounded-lg text-center transition-colors ${buttonStyle} `
  }

  return (
    <>
      {button?.url ? (
        <Link
          to={button?.url}
          className={clsx(buttonStyle, className)}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button className={clsx(buttonStyle, className)} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
