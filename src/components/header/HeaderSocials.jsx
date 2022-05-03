import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'      //icons from react icons library
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/piotr-machowski-5b39a8221/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/piotrmac0/" target="_blank" rel="noopener noreferrer"><FaGithub /> </a>
            <a href="https://twitter.com/piotrmac0" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            <a href="https://dribbble.com/piotrmac0/" target="_blank" rel="noopener noreferrer"><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials