import React from 'react';
import Image from 'next/image';

import HTML from "../public/assets/skills/html.png";
import CSS from "../public/assets/skills/css.png";
import JAVASCRIPT from "../public/assets/skills/javascript.png";
import REACT from "../public/assets/skills/react.png";
import TAILWIND from "../public/assets/skills/tailwind.png";
import MONGODB from "../public/assets/skills/mongo.png";
import NODEJS from "../public/assets/skills/node.png";
import GITHUB from "../public/assets/skills/github.png";
import GIT from "../public/assets/skills/git.png";
import SASS from "../public/assets/skills/sass.png";

function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-gray-900 font-bold  underline underline-offset-4'>
                    Skills
                </p>
                <h2 className='py-4'>Mes compétances</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={HTML} width='64px' height='64px' alt='HTML' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML5</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={CSS} width='64px' height='64px' alt='CSS3' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS3</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={JAVASCRIPT} width='64px' height='64px' alt='Javascript' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={REACT} alt='React' width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={TAILWIND} width='64px' height='64px' alt='Tailwind' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={MONGODB} width='64px' height='64px' alt='MongoDB' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MONGODB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={NODEJS} width='40px' height='40px' alt='NodeJS' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NODEJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={GITHUB} width='64px' height='64px' alt='Github' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={GIT} width='64px' height='64px' alt='Git' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GIT</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={SASS} width='64px' height='64px' alt='Sass' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SASS</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
