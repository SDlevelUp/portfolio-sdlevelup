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
                <h2 className='py-4'>
                    Les projets que j'ai réalisé au cours de ma formation
                </h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectsItems
                        backgroundImg={BookiImg}
                        projectUrl="/booki"
                        tech='HTML5, CSS3'
                    />

                    <ProjectsItems
                        backgroundImg={OhmyfoodImg}
                        projectUrl="/ohmyfood"
                        tech='HTML5, CSS3, SASS'
                    />

                    <ProjectsItems
                        backgroundImg={LapanthereImg}
                        projectUrl="/lapanthere"
                        tech='HTML5, CSS3'
                    />

                    <ProjectsItems
                        backgroundImg={KanapImg}
                        projectUrl="/kanap"
                        tech='JAVASCRIPT'
                    />

                    <ProjectsItems
                        backgroundImg={PiquanteImg}
                        projectUrl="/piquante"
                        tech='NODEJS,EXPRESSJS, MONGODB'
                    />

                    <ProjectsItems
                        backgroundImg={KasaImg}
                        projectUrl="/kasa"
                        tech='REACT, HTML5, CSS3'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;