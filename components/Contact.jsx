import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';


const Contact = () => {

    // Variables
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Méthode
    const onSubmitHandler = data => {
        console.log(data);
    }
















    return (
        <div id='contact' className='w-full lg:h-full'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='text-xl tracking-widest uppercase text-gray-900 font-bold underline underline-offset-4'>
                    Contact
                </p>
                <h2 className='py-4 '>Me contacter</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div>
                            </div>
                            <div>
                                <h2 className='py-2'>Sarah Berri | CactusDev</h2>
                                <p>Développeuse web junior</p>
                                <p className='py-4'>
                                    Je suis disponible pour des missions en free-lance
                                    ou en entreprise.
                                    <br />
                                    <br />
                                    Contactez-moi &#33;
                                </p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Me suivre</p>
                                <div className='flex py-4 space-x-4'>

                                    <Link href='https://www.linkedin.com/in/sarah-berri'>
                                        <div className='rounded-full shadow-lg  hover:shadow-fuchsia-500/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </Link>
                                    <Link href="https://github.com/Cactus-Dev-Agency">
                                        <div className='rounded-full shadow-lg  hover:shadow-fuchsia-500/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl text-black rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form onSubmit={handleSubmit(onSubmitHandler)}
                                method='POST'
                                encType='multipart/form-data'
                            >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm text-white py-2'>Nom</label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='lastname'
                                            placeholder='Votre Nom'
                                            {...register('nom', {
                                                required: true
                                            })}
                                        />
                                        {errors.nom && (
                                            <small className='pl-2 font-semibold text-white'>
                                                Vous devez renseigner votre nom.
                                            </small>
                                        )}
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 text-white'>
                                            Prénom
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            placeholder='Votre Prénom'
                                            {...register('prenom', {
                                                required: true
                                            })}
                                        />
                                        {errors.prenom && (
                                            <small className='pl-2 font-semibold text-white'>
                                                Vous devez renseigner votre prénom.
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>E-mail</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        placeholder='Votre adresse mail'
                                        {...register('email', {
                                            required: true
                                        })}
                                    />
                                    {errors.email && (
                                        <small className='pl-2 font-semibold text-white'>
                                            Vous devez renseigner une adresse e-mail.
                                        </small>
                                    )}
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Objet du message</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        placeholder='Je vous contact pour...'
                                        {...register('objet', {
                                            required: true
                                        })}
                                    />
                                    {errors.objet && (
                                        <small className='pl-2 font-semibold text-white'>
                                            Vous devez renseigner l'objet de votre message.
                                        </small>
                                    )}
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3'
                                        rows='7'
                                        placeholder='Bonjour...'
                                        {...register('message', {
                                            required: true
                                        })}
                                    >
                                    </textarea>
                                    {errors.message && (
                                        <small className='pl-2 font-semibold text-white'>
                                            Vous devez renseigner le contenu de votre message.
                                        </small>
                                    )}
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