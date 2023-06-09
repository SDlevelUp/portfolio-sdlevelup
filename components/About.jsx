import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from "../public/assets/about.png";

function About() {
    return (
        <div id='about' className=' z-1 w-full md:h-screen p-2 flex items-center pt-[114px] z-1 '>
            <div className='max-w-[1240px] m-auto md:grid lg:grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-gray-900 font-bold  underline underline-offset-4'>
                        A propos
                    </p>
                    <h2 className='py-4'>Qui suis-je ?</h2>
                    <p className='py-2 indent-7'>
                        Développeuse web junior enthousiaste et motivée à apprendre de nouvelles compétences.
                        Ayant récemment obtenu mon diplôme avec <Link href='https://openclassrooms.com/fr/' className='text-[#bc4ed7] cursor-crosshair font-semibold'>Openclassrooms</Link>,
                        j’ai acquis des compétences en développement web, en langages de programmation tels que HTML,
                        CSS et JavaScript, ainsi qu’en conception de bases de données. Je suis prête à relever
                        de nouveaux défis et à travailler avec vous pour créer des projets web innovants et de qualité.
                    </p>
                    <p className='py-2 indent-7'>
                        Depuis ado je me suis toujours interessée au codage et la programmation mais sans jamais
                        sauter le pas, puis après l’obtention de mon BTS Bâtiment en 2013 (qui n’a aucun rapport
                        avec le développement web ^^) j’étais dans le doute quant à mon avenir dans le BTP.
                    </p>
                    <p className='py-2 indent-7'>
                        Puis j’ai commencé à apprendre la programmation la même année avec les cours gratuits
                        de la <Link href='https://3wa.fr/' className='text-[#bc4ed7] font-semibold cursor-crosshair'>3WAcademy</Link>,
                        que je recommande d’ailleurs à tout débutant souhaitant s’initier à la programmation avant de se lancer
                        dans une formation plus ou moins longue.
                    </p>
                    <p className='py-2 italic text-gray-900 font-bold'>
                        &#8223;Le développement web est une course sans fin, mais chaque ligne de code est un pas de plus vers la ligne d’arrivée.&#8221;
                    </p>
                    <Link href='/#projects'>
                        <p className='py-2  underline cursor-crosshair'>
                            Découvrez quelques uns de mes projets.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center p-4 cursor-crosshair'  >
                    <Image src={AboutImg} className='rounded-xl ' alt='/' />
                </div>
            </div>
        </div >
    );
}
export default About;
