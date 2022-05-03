import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio5.png'
import IMG4 from '../../assets/voltonjpg.jpg'
import IMG5 from '../../assets/Cryptoearnx.jpg'
import IMG6 from '../../assets/paintball.jpg'
import IMG7 from '../../assets/Portfolio.jpg'
import IMG8 from '../../assets/Hadesgo.jpg'
import IMG9 from '../../assets/szkolajazdy.jpg'

// array for portfolio dynamic rendering

const data = [

    {
        id1: 1,
        image: IMG1,
        title: 'ERC20 Token',
        github: 'https://github.com/piotrmac0/Token_ERC20.sol',
        demo: 'https://github.com/piotrmac0/Token_ERC20.sol'
    },

    {
        id1: 2,
        image: IMG2,
        title: 'ERC20 Token ICO',
        github: 'https://github.com/piotrmac0/ICO_ERC20_Token.sol',
        demo: 'https://github.com/piotrmac0/ICO_ERC20_Token.sol'
    },

    {
        id1: 7,
        image: IMG7,
        title: 'My portfolio in React.js',
        github: 'https://github.com',
        demo: 'https://voltoninstall.pl'
    },
    {
        id1: 3,
        image: IMG3,
        title: 'Lottery contract in Solidity',
        github: 'https://github.com/piotrmac0/Lottery_contract.sol',
        demo: 'https://github.com/piotrmac0/Lottery_contract.sol'


    },

    {
        id1: 5,
        image: IMG5,
        title: 'Website Cryptoearnx.com',
        github: 'https://github.com',
        demo: 'https://cryptoearnx.com'
    },

    {
        id1: 6,
        image: IMG6,
        title: 'Website paintball-osada.pl',
        github: 'https://github.com',
        demo: 'https://paintball-osada.pl'
    },

    {
        id1: 4,
        image: IMG4,
        title: 'Website Voltoninstall.pl',
        github: 'https://github.com',
        demo: 'https://voltoninstall.pl'
    },

    {
        id1: 8,
        image: IMG9,
        title: 'Website szkolajazdymachowski.pl',
        github: 'https://github.com',
        demo: 'https://szkolajazdymachowski.pl'
    },

    {
        id1: 9,
        image: IMG8,
        title: 'Website pogrzebypolaniec.pl',
        github: 'https://github.com',
        demo: 'https://pogrzebypolaniec.pl'
    },


]

const Portfolio = () => {
    return (
        <section id="portfolio">

            <h5>My Recent Work</h5>
            <h2 data-aos="zoom-in">Portfolio</h2>

            <div className="container portfolio__container" data-aos="zoom-in">

                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (

                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live</a>
                                </div>
                            </article>

                        )
                    })
                }








                {/*OLD VERSION without array data and dynamic array 
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary'>Dribbble</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary'>Dribbble</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary'>Dribbble</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary'>Dribbble</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary'>Dribbble</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary'>Dribbble</a>
                    </div>
                </article>
    end of OLD version */}


            </div>
        </section >
    )
}

export default Portfolio