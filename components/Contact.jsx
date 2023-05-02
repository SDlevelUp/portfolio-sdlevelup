import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-full'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='text-xl tracking-widest uppercase text-gray-900 font-bold underline underline-offset-4'>
                    Contact
                </p>
                <h2 className='py-4 '>Me contacter</h2>

                {/* left */}
                <div className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full '>
                        <h2 className='py-5'>Sarah Berri | CactusDev</h2>
                        <p>Développeuse web junior.</p>
                        <p className='py-4'>
                            Je suis disponible pour des missions en free-lance ou pour rejoindre un équipe dynamique.
                            <br />
                            <br />
                            Contactez-moi &#33;
                        </p>
                        <p className='uppercase pt-8 text-black font-semibold'>Me suivre</p>
                        <div className='flex py-4 space-x-4'>
                            <Link href=
                                'https://www.linkedin.com/in/sarah-berri'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='cursor-crosshair rounded-full shadow-lg hover:shadow-fuchsia-500/40 p-6 hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </Link>

                            <a href=
                                "https://github.com/SarahBerri"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='cursor-crosshair rounded-full shadow-lg  hover:shadow-fuchsia-500/40 p-6 hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;