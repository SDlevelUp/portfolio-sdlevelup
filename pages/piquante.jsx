import Image from 'next/image';
import React from 'react';
import PiquanteImg from '../public/assets/projects/piquante.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const piquante = () => {
    return (
        <div className='w-full'>
            <div className=' h-[117vh] w-full relative'>
                <div className='top-[260px] justify-center left-0 flex items-center w-full absolute h-0'>
                    <Image
                        className=' h-[270px] w-[360px] absolute rounded-lg'
                        src={PiquanteImg}
                        alt='/'
                    />
                    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 top-[486px] relative'>
                        <div className='col-span-4'>
                            <h2 className='text-lg text-black'>Présentation du projet</h2>
                            <p className='pt-4'>
                                Ce cinquième projet du parcours développement web consistait en
                                la construction d’une API sécurisée pour une application d’avis gastronomiques.
                            </p>

                            <p className='pt-4'>
                                Souhaitant à terme transformer l’application d’évaluation en une boutique
                                en ligne, la première version est une &#34;galerie de sauces&#34; permettant aux
                                aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker
                                ou disliker les sauces que d’autres partagent.
                            </p>
                            <a
                                href='https://github.com/Cactus-Dev-Agency/piquante'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                            </a>
                        </div>
                        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Langages</p>
                                <div className='grid grid-cols-3 md:grid-cols-1'>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> NODEJS
                                    </p>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> MONGODB
                                    </p>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> EXPRESSJS
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

export default piquante;
