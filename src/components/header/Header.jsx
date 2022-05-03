import React from 'react'
import './header.css'
import CTA from './CTA'
import pjotr0 from '../../assets/pjotr0.png'
import HeaderSocial from './HeaderSocials'
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";



class Header extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = GLOBE({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x66ccff
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return <div ref={this.vantaRef}>



            <div className="container header__container">
                <div className="text__container" data-aos="fade-up">
                    <h5>Hello I'm</h5>
                    <h1>Piotr Mac</h1>
                    <h5 className="text-light">FullStack Blockchain Developer</h5>
                    < CTA />
                    <HeaderSocial />
                </div>

                <div className="me" data-aos="fade-up">
                    <img src={pjotr0} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'> Scroll Down</a>

            </div>



        </div >
    }
}

export default Header



{/*
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Piotr Mac</h1>
                <h5 className="text-light">FullStack Developer</h5>
                < CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={pjotr0} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'> Scroll Down</a>

            </div>
        </header>
    )


}

export default Header
*/}