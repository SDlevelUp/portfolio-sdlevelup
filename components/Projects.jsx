import React from 'react';
import ProjectsItems from './ProjectsItems';
import BookiImg from "../public/assets/projects/booki.webp";
import OhmyfoodImg from "../public/assets/projects/ohmyfood.webp";
import LapanthereImg from "../public/assets/projects/lapanthere.webp";
import KanapImg from "../public/assets/projects/kanap.webp";
import PiquanteImg from "../public/assets/projects/piquante.webp";
import KasaImg from "../public/assets/projects/kasa.webp";

function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 '>
                <p className='text-xl tracking-widest uppercase text-gray-900 font-bold underline underline-offset-4'>
                    Mes projets
                </p>
                <h2 className='py-4 text-lg'>
                    Les projets que j'ai réalisé au cours de ma formation
                </h2>
                <div className='grid md:grid-cols-2 gap-8 pt-4'>
                    <ProjectsItems
                        backgroundImg={BookiImg}
                        projectUrl="/booki"
                    />

                    <ProjectsItems
                        backgroundImg={OhmyfoodImg}
                        projectUrl="/ohmyfood"
                    />

                    <ProjectsItems
                        backgroundImg={LapanthereImg}
                        projectUrl="/lapanthere"
                    />

                    <ProjectsItems
                        backgroundImg={KanapImg}
                        projectUrl="/kanap" />

                    <ProjectsItems
                        backgroundImg={PiquanteImg}
                        projectUrl="/piquante" />

                    <ProjectsItems
                        backgroundImg={KasaImg}
                        projectUrl="/kasa" />
                </div>
            </div>
        </div>
    )
}

export default Projects;