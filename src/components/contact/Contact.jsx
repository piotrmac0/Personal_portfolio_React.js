import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsTelephone } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ux5wd8h', 'template_mz42slp', form.current, '51m4TIRe4X1gZm8l7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <section id="contact">

            <h5>Get In Touch</h5>
            <h2 data-aos="zoom-in">Contact Me</h2>

            <div className="container contact__container" data-aos="zoom-in">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>piotrmerce@gmail.com</h5>
                        <a href="mailto:piotrmerce@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Talk in Messenger</h5>
                        <a href="https://m.me/piotr.macx.5" target="_blank" rel="noopener noreferrer">Talk in Messenger</a>
                    </article>

                    <article className="contact__option">
                        <BsTelephone className="contact__option-icon" />
                        <h4>Phone</h4>
                        <h5>+48 535 377 518</h5>
                        <a href="https://wa.me/48535377518" target="_blank" rel="noopener noreferrer">Talk in Whatsapp</a>
                    </article>
                </div>



                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required />
                    <button type="submit" className='btn btn-primary'>Send Message</button>

                </form>

            </div>
        </section >
    )
}

export default Contact