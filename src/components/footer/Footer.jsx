import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>

            <a href="#" className="footer__logo">MAC</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://twitter.com/piotrmac0" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                <a href="https://facebook.com/piotr.macx.5" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Piotr Mac. All rights reserved.</small>
            </div>

        </footer >
    )
}

export default Footer