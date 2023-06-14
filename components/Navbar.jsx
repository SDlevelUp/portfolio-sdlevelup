import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleNav = () => {
        setNav(!nav);
    };

    const handleSetActiveSection = (section) => {
        setActiveSection(section);
    };

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100] bg-black'>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <span className='text-xl font-bold text-white pl-4'>S’Dlevel’Up</span>
                <div>
                    <ul className='hidden md:flex text-white'>
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={200}
                            offset={-100}
                            className={`nav-link mx-4 cursor-crosshair ${activeSection === 'home' ? 'border-b-2 border-white' : ''}`}
                            onClick={() => handleSetActiveSection('home')}
                        >
                            1.acceuil
                        </ScrollLink>

                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={200}
                            offset={-100}
                            className={`nav-link mx-4 cursor-crosshair ${activeSection === 'about' ? 'border-b-2 border-white ' : ''}`}
                            onClick={() => handleSetActiveSection('about')}
                        >
                            2.a propos
                        </ScrollLink>

                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={200}
                            offset={-100}
                            className={`nav-link mx-4 cursor-crosshair ${activeSection === 'projects' ? 'border-b-2 border-white' : ''}`}
                            onClick={() => handleSetActiveSection('projects')}
                        >
                            4.mes projets
                        </ScrollLink>
                        <ScrollLink
                            to="skills"
                            smooth={true}
                            duration={200}
                            offset={-100}
                            className={`nav-link mx-4 cursor-crosshair ${activeSection === 'skills' ? 'border-b-2 border-white' : ''}`}
                            onClick={() => handleSetActiveSection('skills')}
                        >
                            3.skills
                        </ScrollLink>



                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={200}
                            offset={-100}
                            className={`nav-link mx-4 cursor-crosshair ${activeSection === 'contact' ? 'border-b-2 border-white' : ''}`}
                            onClick={() => handleSetActiveSection('contact')}
                        >
                            5.contact
                        </ScrollLink>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <RiMenu3Line size={25} />
                    </div>
                </div>
            </div>

            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''
                }
            >
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#dbe4f5] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 inline-table'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-end'>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg bg-slate-gray-600 p-3 cursor-pointer'
                            >
                                <AiOutlineCloseCircle />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Travaillons ensemble sur vos besoins&#46;
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    acceuil
                                </li>
                            </Link>

                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    a propos
                                </li>
                            </Link>

                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    skills
                                </li>
                            </Link>

                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    mes projets
                                </li>
                            </Link>

                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    contact
                                </li>
                            </Link>
                        </ul>

                        <div className='pt-10'>
                            <p className='uppercase tracking-widest text-[#150b1d]'>
                                Soyons connectés
                            </p>
                            <div className='flex space-x-4 my-4 w-full sm:w-[80%]'>
                                <Link
                                    href="https://www.linkedin.com/in/sarah-berri"
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label="Me suivre et m'envoyer un message sur Linkedin"
                                >
                                    <div className='p-3 cursor-crosshair hover:scale-105 ease-in duration-300 rounded-full shadow-lg  hover:shadow-fuchsia-500/40'>
                                        <FaLinkedinIn />
                                    </div>
                                </Link>

                                <Link
                                    href="https://github.com/SDlevelUp"
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label="Me suivre sur Github"

                                >
                                    <div className='p-3 cursor-crosshair hover:scale-105 ease-in duration-300 rounded-full shadow-lg  hover:shadow-fuchsia-500/40'>
                                        <FaGithub />
                                    </div>
                                </Link>

                                <Link
                                    href="mailto:sarahberri.pro@gmail.com"
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label="M'envoyer un mail"

                                >
                                    <div className='p-3 cursor-crosshair hover:scale-105 ease-in duration-300 rounded-full shadow-lg  hover:shadow-fuchsia-500/40'>
                                        <IoMdMail />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Navbar;