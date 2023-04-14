import React from 'react'
import Type from './Type'

function Main() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] h-full w-fumm mx-auto p-2 flex items-center justify-center'>
                <div>
                    <h1 className='py-4 text-[30px]'>
                        Salut, je suis <span className='text-[#000]'> Sarah,</span>
                    </h1>
                    <h1 className='py-4 text-[58px]'>
                        <Type />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Main
