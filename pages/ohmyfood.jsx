import Image from 'next/image';
import React from 'react';
import OhmyfoodImg from '../public/assets/projects/ohmyfood.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const booki = () => {
    return (
        <div className='w-full'>
            <div className=' h-[114vh] w-full relative'>
                <div className='top-[260px] justify-center left-0 flex items-center w-full absolute h-0'>
                    <Image
                        className=' h-[270px] w-[360px] absolute rounded-lg'
                        src={OhmyfoodImg}
                        alt='/'
                    />
                    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 top-[420px] relative'>
                        <div className='col-span-4'>
                            <h2 className='text-lg text-black'>Présentation du projet</h2>
                            <p className='pt-4'>
                                Ce deuxième projet consister à développer un site “mobile first”
                                qui répertorie les menus de restaurants gastronomiques. A terme les
                                clients pourront composer le menu de leur repas pour que les plats
                                soient prêts à leur arrivée. La page d'acceuil doit contenir un loader.
                            </p>
                            <a
                                href='https://github.com/Cactus-Dev-Agency/Booki'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                            </a>
                            <a
                                href='https://cactus-dev-agency.github.io/OhMyFood/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4'>Demo</button>
                            </a>
                        </div>
                        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Langages</p>
                                <div className='grid grid-cols-3 md:grid-cols-1'>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> HTML5
                                    </p>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> CSS3
                                    </p>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> SASS
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link href='/#projects'>
                            <p className='underline cursor-pointer'>Retour</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default booki;