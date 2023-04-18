import React from "react"
import { ScrollToTop } from '@/components/scroll';
import { RxDoubleArrowDown } from "react-icons/rx"

function Main() {




    return (
        <div id="home" className='w-full h-screen text-center'>
            <div className='max-w-[1240px] h-full w-full mx-auto p-2 flex items-center justify-center'>
                <div>
                    <h1 className='py-4 text-[33px]'>
                        Salut, je suis <span className='text-[#000]'> Sarah,</span>
                    </h1>

                    <div className="justify-center items-center text-5xl text-black">
                        <h2>Développeuse web junior</h2>
                    </div>
                </div>

            </div>
            <a href='/#about'>
                <div className='animate-bounce flex items-center justify-center text-5xl text-[#000] relative bottom-[270px]'>
                    <RxDoubleArrowDown />
                </div>
            </a>
            <ScrollToTop />
        </div>
    )
}

export default Main
