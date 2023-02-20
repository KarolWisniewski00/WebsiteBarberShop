import React, { useState } from "react"

import { Transition } from "@headlessui/react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-stone-900/50 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white w-44 lg:w-60"><img alt="Logo" className="block object-cover object-center w-full h-full"src="images/logo.png"/></span>
                    </a>
                    <div className="flex md:order-2">
                        <a href="https://www.instagram.com/" className="text-stone-100 hover:text-stone-400 mx-1.5 sm:mx-6 text-2xl inline-flex items-center p-2"><svg className="block h-6 w-6 fill-current" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"/></svg></a>
                        <a href="https://www.facebook.com/" className="text-stone-100 hover:text-stone-400 mx-1.5 sm:mx-6 text-2xl inline-flex items-center p-2"><svg className="block h-6 w-6 fill-current" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg></a>
                        <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-stone-100 rounded-lg lg:hidden focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                    <svg className="block h-6 w-6"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M4 6h16M4 12h16M4 18h16"/></svg>
                                ) : (
                                    <svg className="block h-6 w-6"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                                )
                            }
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li><a href="#" className="block py-2 pl-3 pr-4 md:p-0 text-stone-100 hover:text-stone-400" aria-current="page">Start</a></li>
                            <li><a href="#about" className="block py-2 pl-3 pr-4 md:p-0 text-stone-100 hover:text-stone-400" aria-current="page">O nas</a></li>
                            <li><a href="#artist" className="block py-2 pl-3 pr-4 md:p-0 text-stone-100 hover:text-stone-400" aria-current="page">Artyści</a></li>
                            <li><a href="#gallery" className="block py-2 pl-3 pr-4 md:p-0 text-stone-100 hover:text-stone-400" aria-current="page">Galeria</a></li>
                            <li><a href="#price" className="block py-2 pl-3 pr-4 md:p-0 text-stone-100 hover:text-stone-400" aria-current="page">Cennik</a></li>
                            <li><a href="https://booksy.com/pl-pl/176541_sudio-fryzjerskie-avantgarde_fryzjer_12376_piekary-slaskie#ba_s=sr_1" className="block py-2 pl-3 pr-4 md:p-0 text-stone-100 hover:text-stone-400" aria-current="page">Rezerwacja</a></li>
                            <li><a href="#contact" className="block py-2 pl-3 pr-4 md:p-0 text-stone-100 hover:text-stone-400" aria-current="page">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
                <Transition show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    {(ref) => (
                        <div className="lg:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                                <a href="#"className="text-stone-100 hover:text-stone-400 block px-3 py-2 text-base font-medium">Start</a>
                                <a href="#about"className="text-stone-100 hover:text-stone-400 block px-3 py-2 text-base font-medium">O nas</a>
                                <a href="#gallery"className="text-stone-100 hover:text-stone-400 block px-3 py-2 text-base font-medium">Galeria</a>
                                <a href="#price"className="text-stone-100 hover:text-stone-400 block px-3 py-2 text-base font-medium">Cennik</a>
                                <a href="https://booksy.com/pl-pl/176541_sudio-fryzjerskie-avantgarde_fryzjer_12376_piekary-slaskie#ba_s=sr_1"className="text-stone-100 hover:text-stone-400 block px-3 py-2 text-base font-medium">Rezerwacja</a>
                                <a href="#contact"className="text-stone-100 hover:text-stone-400 block px-3 py-2 text-base font-medium">Kontakt</a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Navbar