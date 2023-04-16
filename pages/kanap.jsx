import Image from 'next/image';
import React from 'react';
import kanapImg from '../public/assets/projects/kanap.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const kanap = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-screen '>
                <div className='top-[290px] justify-center flex items-center w-full absolute '>
                    <Image
                        className='h-auto w-[940px] absolute rounded-lg'
                        src={kanapImg}

                        alt='/'
                    />
                    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 top-[400px] relative'>
                        <div className='col-span-4'>
                            <h2 className='text-lg text-black'>Présentation du projet</h2>
                            <p className='pt-4'>
                                Ce quatrième projet du parcours développement web consiste en l'intégration
                                des éléments de l'API dans les différentes pages web avec JavaScript.
                                Seule le coté back-end a été codé, le front-end avait déjà été fait.
                                Au cours du projet, un plan de test d'acceptation a été planifié afin de
                                répondre aux éxigences listées dans le pdf (voir repo).
                            </p>

                            <a
                                href='https://github.com/Cactus-Dev-Agency/kanap'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                            </a>
                            <a
                                href='https://cactus-dev-agency.github.io/kanap/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4'>Demo</button>
                            </a>
                        </div>
                        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Technologies</p>
                                <div className='grid grid-cols-3 md:grid-cols-1'>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Javascript
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

export default kanap;
