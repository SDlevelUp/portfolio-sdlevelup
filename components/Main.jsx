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
            />
        </motion.div>
    );
}

function Main() {
    return (
        <div id="home" className='w-full h-full text-center'>
            <div className='max-w-[1240px] h-full w-full mx-auto p-2 flex items-center justify-center'>
                <div>
                    <h1 className='pt-[145px] text-[50px] '>
                        Salut&#44; je suis <span className='text-[#000]'> Sarah&#44;</span>
                    </h1>
                    <h2 className="pt-[45px] text-[28px]">
                        Développeuse web
                    </h2>
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