import Image from 'next/image';
import React from 'react';
import KasaImg from '../public/assets/projects/kasa.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const kasa = () => {
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
                                    src={KasaImg}
                                    alt='Image du projet Kanap'
                                />
                            </div>
                            <h2 className='text-lg text-black mt-10'>Présentation du projet :</h2>
                            <p className='mt-4'>
                                Kasa est dans le métier de la location d’appartements entre particuliers depuis près de
                                10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des
                                leaders de la location d’appartements entre particuliers en France.
                            </p>

                            <h2 className='text-lg text-black mt-4'>Objectifs :</h2>
                            <p className='mt-4'>
                                L'objectif est de développer l'ensemble de l'application et ses composants avec React,
                                en suivant les maquettes Figma fournies.
                            </p>
                            <div className='md:hidden text-center'>
                                <Link
                                    href='https://github.com/SDlevelUp/Kasa'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='px-8 py-2 mt-4 hover:bg-black hover:text-white duration-300'>Voir le code du projet sur GitHub</button>
                                </Link>
                                <Link
                                    href='https://kasa-czfeh6f6q-sarahberri.vercel.app/'
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
                                        REACT
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='col-span-4 hidden md:block'>
                            <Link
                                href='https://github.com/SDlevelUp/Kasa'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8 hover:bg-black hover:text-white'>Voir le code du projet sur GitHub</button>
                            </Link>
                            <Link
                                href='https://kasa-czfeh6f6q-sarahberri.vercel.app/'
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

export default kasa;



