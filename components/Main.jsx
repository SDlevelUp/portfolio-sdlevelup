import React from "react";
import { ScrollToTop } from '@/components/scroll';
import { motion } from 'framer-motion';

function Astronaut() {
    return (
        <motion.div
            className="w-2/3 h-auto"
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
                className="w-full animate-spin-slow"
            />
        </motion.div>
    );
}
function Main() {

    return (
        <div id="home" className='w-full lg:h-[120vh] md:h-screen text-center'>
            <div className='max-w-[1240px] h-full w-full mx-auto p-2 flex items-center justify-center'>
                <div>
                    <h1 className='py-4 pt-[80px] text-[33px]'>
                        Salut&#44; je suis <span className='text-[#000]'> Sarah&#44;</span>
                    </h1>

                    <div className="justify-center items-center text-5xl text-black">
                        <h2>Développeuse web junior</h2>
                    </div>

                    <div className='w-full h-auto flex justify-center lg:justify-center lg:items-center '>
                        <div className="w-full h-auto flex items-center justify-center mt-[80px]">
                            <Astronaut />
                        </div>
                    </div>

                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Main;