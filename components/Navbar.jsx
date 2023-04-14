import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Essai from "../public/assets/essai.png";
import EssaiSide from "../public/assets/essai2.png";
// import React, { useState, useEffect } from 'react';

import { AiOutlineCloseCircle, AiFillMail } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    };
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image
                    src={Essai}
                    alt='Logo'
                    width='125'
                    height='50'
                    className='cursor-crosshair'
                />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className='ml-10 text-lg hover:border-b uppercase cursor-crosshair'>Acceuil</li>
                        </Link>

                        <Link href="/">
                            <li className='ml-10 text-lg hover:border-b uppercase cursor-crosshair'>A propos</li>
                        </Link>

                        <Link href="/">
                            <li className='ml-10 text-lg hover:border-b uppercase cursor-crosshair'>Skills</li>
                        </Link>

                        <Link href="/">
                            <li className='ml-10 text-lg hover:border-b uppercase cursor-crosshair'>Mes projets</li>
                        </Link>

                        <Link href="/">
                            <li className='ml-10 text-lg hover:border-b uppercase cursor-crosshair'>Contact</li>
                        </Link>
                    </ul>

                    <div onClick={handleNav} className='md:hidden'>
                        <RiMenu3Line size={25} />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#b5aabf] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >

                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image
                                src={EssaiSide}
                                width='87'
                                height='35'
                                alt='/' />
                            <div onClick={handleNav} className='p-3 cursor-crosshair text-3xl'>
                                <AiOutlineCloseCircle />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Travaillons ensemble sur vos besoins.
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-lg'>acceuil</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-lg'>a propos</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-lg'>skills</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-lg'>mes projets</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-lg'>contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#150b1d]'>
                                Soyons connectés
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                                <div className='p-3 cursor-crosshair hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>

                                <div className='p-3 cursor-crosshair hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>

                                <div className='p-3 cursor-crosshair hover:scale-105 ease-in duration-300'>
                                    <AiFillMail />
                                </div>

                                <div className='p-3 cursor-crosshair hover:scale-105 ease-in duration-300'>
                                    <BsPersonCircle />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar