import Image from 'next/image';
import React from 'react';
import KanapImg from '../public/assets/projects/kanap.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const kanap = () => {
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
                                    src={KanapImg}
                                    alt='Image du projet Kanap'
                                />
                            </div>
                            <h2 className='text-lg text-black mt-10'>Présentation du projet :</h2>
                            <p className='mt-4'>
                                Kanap est une marque de canapés qui vend ses produits depuis sa boutique exclusivement.
                                Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique
                                physique pour vendre ses produits sur Internet.
                            </p>

                            <h2 className='text-lg text-black mt-4'>Objectifs :</h2>
                            <p className='mt-4'>
                                Unifier les travaux déjà réalisés par les développeurs front-end et back-end, en intégrant
                                dynamiquement les éléments de l’API dans les différentes pages web avec JavaScript.
                                L’utilisateur doit pouvoir visualiser l’ensemble des produits disponibles, ajouter un ou
                                plusieurs articles dans un panier, modifier ou supprimer son panier et enfin, passer commande.
                            </p>
                            <div className='md:hidden text-center'>
                                <Link
                                    href='https://github.com/SDlevelUp/Kanap'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='px-8 py-2 mt-4 hover:bg-black hover:text-white '>Voir le code du projet sur GitHub</button>
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
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' />
                                        JAVASCRIPT
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-4 hidden md:block'>
                            <Link
                                href='https://github.com/SDlevelUp/Kanap'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8 hover:bg-black hover:text-white '>Voir le code du projet sur GitHub</button>
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

export default kanap;
