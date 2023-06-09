import Image from 'next/image';
import React from 'react';
import BookiImg from '../public/assets/projects/booki.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const booki = () => {
    return (
        <div className='w-full'>
            <div className='h-[117vh] w-full relative'>
                <div className='top-[260px] justify-center left-0 flex items-center w-full absolute h-0'>
                    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 top-[400px] relative'>
                        <div className='col-span-4 mt-12'>
                            <div className='relative'>
                                <Image
                                    priority
                                    className='h-[270px] w-[360px] rounded-lg'
                                    src={BookiImg}
                                    alt='Image du projet Kanap'
                                />
                            </div>
                            <h2 className='text-lg text-black mt-10'>Présentation du projet :</h2>
                            <p className='mt-4'>
                                Booki est une agence de voyage proposant un outil de planification de vacances.
                            </p>
                            <p className='mt-4'>
                                Le site permet aux usagers de trouver des hébergements et des activités
                                dans la ville de leur choix, ils peuvent également affiner leurs recherches
                                selon des critères.
                            </p>
                            <h2 className='text-lg text-black mt-4'>Objectifs :</h2>
                            <p className='mt-4'>
                                L’objectif principal est de créer un site en intégrant la maquette conçue
                                par le design UI, en HTML5 et CSS3.
                            </p>
                            <div className='md:hidden text-center'>
                                <Link
                                    href='https://github.com/SDlevelUp/Booki'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='px-8 py-2 mt-4 hover:bg-black hover:text-white duration-300'>Voir le code du projet sur GitHub</button>
                                </Link>
                                <Link
                                    href='https://sdlevelup.github.io/Booki/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='px-12 py-2 mt-4 hover:bg-black hover:text-white duration-300'>Démo du site</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4 mt-12'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Langages utilisés :</p>
                                <div className='grid grid-cols-3 md:grid-cols-1'>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' />
                                        HTML5
                                    </p>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' />
                                        CSS3
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-4 hidden md:block'>
                            <Link
                                href='https://github.com/SDlevelUp/Booki'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8 hover:bg-black hover:text-white'>Voir le code du projet sur GitHub</button>
                            </Link>
                            <Link
                                href='https://sdlevelup.github.io/Booki/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-12 py-2 mt-4 hover:bg-black hover:text-white'>Démo du site</button>
                            </Link>
                        </div>
                        <div className='col-span-4 md:block'>
                            <Link href='/#projects'>
                                <p className='underline cursor-crosshair mt-10'>Retour</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default booki;