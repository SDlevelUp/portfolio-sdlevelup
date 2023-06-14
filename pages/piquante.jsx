import Image from 'next/image';
import React from 'react';
import PiquanteImg from '../public/assets/projects/piquante.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const piquante = () => {
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
                                    src={PiquanteImg}
                                    alt='Image du projet Kanap'
                                />
                            </div>
                            <h2 className='text-lg text-black mt-10'>Présentation du projet :</h2>
                            <p className='mt-4'>
                                Les sauces piquantes sont de plus en plus populaires, c’est pourquoi ce nouveau client,
                                la marque de condiments à base de piment Piiquante, veut développer une application web
                                de critique des sauces piquantes appelée «Hot Takes».
                            </p>
                            <h2 className='text-lg text-black mt-4'>Objectifs :</h2>
                            <p className='mt-4'>
                                Construire une API sécurisée avec ses models, controllers et routes.

                                Les utilisateurs de l’application doivent pouvoir créer de nouvelles sauces, modifier
                                ou supprimer leur sauce, ainsi que liker ou disliker toutes les sauces créées.
                            </p>
                            <div className='md:hidden text-center'>
                                <Link
                                    href='https://github.com/SDlevelUp/Piquante'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='px-8 py-2 mt-4 hover:bg-black hover:text-white'>Voir le code du projet sur GitHub</button>
                                </Link>

                            </div>
                        </div>
                        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4 mt-12'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Langages utilisés :</p>
                                <div className='grid grid-cols-3 md:grid-cols-1'>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1 uppercase' />
                                        MONGODB
                                    </p>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1 ' />
                                        NODEJS
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-4 hidden md:block'>
                            <Link
                                href='https://github.com/SDlevelUp/Piquante'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8 hover:bg-black hover:text-white'>Voir le code du projet sur GitHub</button>
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

export default piquante;




