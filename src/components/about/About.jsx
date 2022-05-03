import React from 'react'
import './about.css'
import pjotr0 from '../../assets/pjotr0.png'
import { FaAward } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'
import { MdOutlineDesignServices } from 'react-icons/md'

const about = () => {
    return (
        <section id="about">

            <h5 className="animation">Get to know</h5>
            <h2 data-aos="zoom-in">About me</h2>


            <div className="container about__container">
                <div className="about__me" data-aos="zoom-in">
                    <div className="about__me-image">
                        <img src={pjotr0} alt="aboutme" />
                    </div>

                </div>

                <div className="about__content" data-aos="zoom-in">

                    <div className="about__cards">

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Full stack dev</h5>
                            <small> UX/UI + frontend + backend </small>
                        </article>


                        <article className='about__card'>
                            <BiCodeBlock className='about__icon' />
                            <h5>Deep knowledge</h5>
                            <small>of crypto technology and market, especially DeFi </small>
                        </article>


                        <article className='about__card'>
                            <MdOutlineDesignServices className='about__icon' />
                            <h5>Love to learn</h5>
                            <small> and develop new things in blockchain and crypto </small>
                        </article>
                    </div>

                    <p>Hello! I'm full stack blockchain and Web3 developer with specialization in smart contracts in Solidity,
                        with React.js and Vanilla Javascript for frontend, as also i'm UX/UI designer for cryptocurrency and blockchain related projects.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's a talk</a>

                </div>

            </div>

        </section >
    )
}

export default about