import React from "react";
import { ScrollToTop } from '@/components/scroll';
import { motion } from 'framer-motion';

function Astronaut() {
    return (
        <motion.div
            className="w-2/4 h-auto"
            animate={{
                y: [-10, 10],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        >
            <motion.img
                src="../assets/astronaut.svg"
                alt="Astronaut"
                className="w-full animate-spin-slow "
                width={200}
                height={200}
            />
        </motion.div>
    );
}

function Main() {
    return (
        <div id="home" className='w-full h-full text-center'>
            <div className='max-w-[1240px] h-full w-full mx-auto p-2 flex items-center justify-center'>
                <div>
                    <h1 className='pt-[145px] text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left uppercase'>
                        Salut&#44; je suis <span className='text-[#000]'> Sarah</span>
                    </h1>
                    <div className="flex pt-10 justify-center">
                        <div className="w-max">
                            <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
                                Développeuse Web
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex justify-center lg:justify-center lg:items-center'>
                        <div className="w-full h-auto flex items-center justify-center mt-[80px]">
                            <Astronaut />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop className='z-50 fixed' />
        </div>
    )
}

export default Main;