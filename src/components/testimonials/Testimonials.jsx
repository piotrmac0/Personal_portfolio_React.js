import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Hadeslogo.jpg'
import AVTR2 from '../../assets/Cryptologo.jpg'
import AVTR3 from '../../assets/PaintballLogo.jpg'


// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [

    {
        avatar: AVTR1,
        name: 'Marian Żugaj',
        review: 'Great, professional job - effect was better that expected!'
    },

    {
        avatar: AVTR2,
        name: 'Petro Merce',
        review: 'My web app is going as i wanted, good work!'
    },

    {
        avatar: AVTR3,
        name: 'Krzysztof Nowak',
        review: 'Design was better than expected, my bussiness has a great website.'
    },


]

const Testimonials = () => {
    return (
        <section id="testimonials">

            <h5>Review from Clients</h5>
            <h2 data-aos="zoom-in">Testimonials</h2>

            <Swiper className="container testimonials__container" data-aos="zoom-in"
                modules={[Navigation, Pagination]}
                spaceBetween={100}
                sliderPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar one" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>

                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials