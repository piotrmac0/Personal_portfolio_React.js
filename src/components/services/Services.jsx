import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id="services">

            <h5 className="services__h5">What I Offer</h5>
            <h2 data-aos="zoom-in">Services</h2>

            <div className="container services__container" data-aos="zoom-in">

                {/* First services */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> UX/UI for websites and apps </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Workflows and mockups</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Projects fully tailored to needs </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Looks awesome on any screen sizes</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> High and intuitive usability</p>
                        </li>
                    </ul>
                </article>


                {/* Second services */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Frontend</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Apps, Dapps and websites in React.js</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Websites and ecommerce in Wordpress</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Implementations from Photoshop, Figma and AdobeXd</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Implementations of ETH Solidity Smart Contracts</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Web3 websites and Dapps</p>
                        </li>
                    </ul>
                </article>


                {/* Third services */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Blockchain</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Solidity Smart Contracts</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Implementations of ERC20 tokens</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Cryptocurrencies ICO Public Sales, Lotteries, Airdrops</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Node.js and Firebase</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> PHP and MySQL</p>
                        </li>
                    </ul>
                </article>


            </div>

        </section >
    )
}

export default Services