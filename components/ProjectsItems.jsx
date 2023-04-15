import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Booki from "../public/assets/projects/booki.webp";




function ProjectsItems() {
    return (
        <div className='relative flex items-center justify-center h-auto w-full group shadow-xl p-4 rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
            <Image
                className='rounded-xl group-hover:opacity-10'
                src={Booki}
                alt="/"
            />
            <div className='hidden group-hover:block absolute pt-8 text-center'>
                <Link href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2'>
                        DEMO
                    </button>
                </Link>
                <Link href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2'>
                        CODE
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectsItems
