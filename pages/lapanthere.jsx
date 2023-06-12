import Image from 'next/image';
import React from 'react';
import LapanthereImg from '../public/assets/projects/lapanthere.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const lapanthere = () => {
    return (
        <div className='w-full'>
            <div className=' h-[117vh] w-full relative'>
                <div className='top-[260px] justify-center left-0 flex items-center w-full absolute h-0'>
                    <Image
                        priority
                        className='h-[270px] w-[360px] absolute rounded-lg'
                        src={LapanthereImg}
                        alt='Image du projet La Panthère'
                    />
                    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 top-[400px] relative'>
                        <div className='col-span-4'>
                            <h2 className='text-lg text-black'>Présentation du projet</h2>
                            <p className='pt-4'>
                                Ce troisième projet consister en l’optimisation d’un site web existant.
                            </p>
                            <Link
                                href='https://github.com/SDlevelUp/LaPanthere'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8'>Code du projet</button>
                            </Link>
                            <Link
                                href='https://sdlevelup.github.io/LaPanthere//'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4'>Demo</button>
                            </Link>
                        </div>
                        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Langages utilisés</p>
                                <div className='grid grid-cols-3 md:grid-cols-1'>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> HTML
                                    </p>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> CSS3
                                    </p>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> (SEO)
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
        </div >
    );
};

export default lapanthere;