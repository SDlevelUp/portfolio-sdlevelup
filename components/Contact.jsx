
import Link from 'next/link';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='text-xl tracking-widest uppercase text-gray-900 font-bold underline underline-offset-4'>
                    Contact
                </p>
                <h2 className='py-4 text-lg'>Me contacter</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div>
                            </div>
                            <div>
                                <h2 className='py-2'>Sarah Berri | CactusDev</h2>
                                <p>Développeuse web</p>
                                <p className='py-4'>
                                    Je suis disponible pour des missions en free-lance
                                    ou en entreprise. Contactez-moi !
                                </p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Me suivre</p>
                                <div className='flex py-4 space-x-4'>

                                    <a href='https://www.linkedin.com/in/sarah-berri'>
                                        <div className='rounded-full shadow-lg  hover:shadow-fuchsia-500/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a href="https://github.com/Cactus-Dev-Agency">
                                        <div className='rounded-full shadow-lg  hover:shadow-fuchsia-500/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl text-black rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form
                                method='POST'
                                encType='multipart/form-data'
                            >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm text-white py-2'>Nom</label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='name'
                                            placeholder='Nom, Prénom'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 text-white'>
                                            Numéro de téléphone
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='phone'
                                            placeholder='Téléphone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                        placeholder='Votre Email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Objet du message</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='subject'
                                        placeholder='Objet du message'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3'
                                        rows='7'
                                        name='message'
                                        placeholder='Votre message'
                                    ></textarea>
                                </div>
                                <button
                                    className='w-full p-4 text-white bg-gradient-to-r from-fuchsia-500 to-purple-500'>
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div >
        </div >

    );
};

export default Contact;