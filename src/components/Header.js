import React, { useState, useCallback, useEffect } from 'react'
import nav from '../settings/main.json'
import navbutton from '../settings/main.json'
import Link from '../resolvers/Link'
import Image from '../resolvers/Image'

import DarkmodeToggle from './DarkmodeToggle'
import Container from './UI/Container'

import Logo from '../../static/img/logo-horiz.png'
import Logo2 from '../../static/img/logo-horiz-white2.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleScroll = useCallback(() => {
    setScroll(window.scrollY > 30);
  }, []);


  return (
    <header className={ (scroll ? "bg-[#2579bceb] text-white " : " text-white " ) + "sticky top-0 left-0 right-0 z-10 flex h-20 md:h-24  dark:bg-opacity-50 dark:bg-black text-white dark:text-white"} >
      <Container className="flex items-center justify-between m-auto lg:gap-20">
        <Link to="/" className="">
          <Image src={Logo2} alt="Logo" className="h-14 md:w-auto md:h-20 " />
        </Link>
        <div className="items-center hidden md:flex">
          <nav className="flex font-bold gap-14 ">
            {nav.nav.map((item, i) => (
              <Link to={item.permalink} key={i}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center pl-6 ml-6 border-l border-slate-200 dark:border-zinc-800 text-">
            <DarkmodeToggle />
           {/* <a
              href="https://github.com/clean-commit/gatsby-starter-henlo"
              target="_blank"
              rel="noopener noreferrer"
              className="block ml-4 transition-colors text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            >
              <div className="sr-only">Henlo on GitHub</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
            </a>*/}
          </div>
        </div>
        <div className="md:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className={"p-2 -mr-1 dark:text-white dark:focus:outline-none text-black-700 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-white focus:bg-white focus:text-white"}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-8 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
        
        <div className="flex items-center md:hidden">
        <nav className="flex flex-col gap-4">
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full p-4">
                <div className="p-5 bg-white border rounded shadow-sm dark:shadow-slate-400 dark:bg-black">
                  <div className="flex items-center justify-end">
                    {/*<div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Spartan Plumbing and Drain"
                        className="inline-flex items-center w-40 text-gray-100"
                      >
                        <img src={Logo} alt="Spartan Plumbing Logo" className="w-full" />
                      </Link>
                    </div>*/}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-[#2579bceb] dark:focus:bg-black dark:hover:bg-black focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="text-gray-600 w-7 dark:text-gray-200" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className='-mt-4' >
                    <ul className="space-y-4">
                    {nav.nav.map((item, i) => (
                      <li key={i}>
                        <Link 
                        to={item.permalink}
                        className="font-bold tracking-wide text-[#2579bceb] transition-colors duration-200 dark:text-white hover:text-gray-400"
                         >
                            {item.name}
                        </Link>
                      </li>
                    ))}
                    {navbutton.navbutton.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.permalink}
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-bold tracking-wide text-white transition duration-200 bg-[#2579bceb] rounded shadow-md dark:bg-white dark:text-black hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                          aria-label="Contact"
                          title="Contact"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}

{    /*                
                    <li>
                        <Link
                          href="/about"
                          aria-label="About"
                          title="About Us"
                          className="font-bold tracking-wide text-blue-800 transition-colors duration-200 hover:text-logo-blue-500"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          aria-label="Services"
                          title="Services"
                          className="font-bold tracking-wide text-blue-800 transition-colors duration-200 hover:text-logo-blue-500"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service-areas"
                          aria-label="Service Areas"
                          title="Service Areas"
                          className="font-bold tracking-wide text-blue-800 transition-colors duration-200 hover:text-logo-blue-500"
                        >
                          Service Areas
                        </Link>
                      </li>


                      <li>
                        <Link
                          to="/contact"
                          aria-label="Contact"
                          title="Contact"
                          className="font-bold tracking-wide text-blue-800 transition-colors duration-200 hover:text-logo-blue-500"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/emergency-services"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-bold tracking-wide text-white transition duration-200 bg-black rounded shadow-md hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                          aria-label="emergency services"
                          title="Emergency Services"
                        >
                          Emergency Services
                        </Link>
                      </li>*/}


                    </ul>
                  </nav>
                </div>
              </div>
            )}
        </nav>
        </div>
        </div>
      </Container>
    </header>
  )
}


export default Header