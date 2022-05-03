import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">

            <h5>What Skills I Have</h5>
            <h2 data-aos="zoom-in">My Experience</h2>

            <div className="container experience__container" data-aos="zoom-in">

                {/* UX/UI */}

                <div className="experience__frontend">
                    <h3>UX/UI</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details_icon" />
                            <h4> Figma </h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Photoshop</h4>
                            <small className="text-light">Intermediate</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> 3D</h4>
                            <small className="text-light">Basic</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> UX/UI Principles </h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Wireframing and prototyping </h4>
                            <small className="text-light">Intermediate</small>
                        </article>

                    </div>
                </div>

                {/* FRONTEND SKILLS */}

                <div className="experience__uxui">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details_icon" />
                            <h4> HTML </h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> CSS </h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Javascript </h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> React.JS </h4>
                            <small className="text-light">Intermediate</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> 3D Objects </h4>
                            <small className="text-light">Basic</small>
                        </article>

                    </div>
                </div>


                {/* BACKEND SKILLS */}
                <div className="experience_backend">

                    <h3>Backend Development</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Node.js </h4>
                            <small className="text-light">Intermediate</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Solidity </h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> MongoDB </h4>
                            <small className="text-light">Basic</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> PHP </h4>
                            <small className="text-light">Intermediate</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Python </h4>
                            <small className="text-light">Basic</small>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Git/Version Control </h4>
                            <small className="text-light">Basic</small>
                        </article>

                    </div>

                </div>

            </div>

        </section >
    )
}

export default Experience