import React from 'react';
import '../styles.css/testimonial.css';
import ava01 from '../Images/ava-1.jpg';
import ava02 from '../Images/ava-2.jpg';
import ava03 from '../Images/ava-3.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";


import { EffectCards } from "swiper";

export default function Testimonial() {
  return (
    <>
    <section className='main'>
        <div className="container sliders">
            <h2 className="section__title">
                Testimonials
            </h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-01">
                    <img src={ava01} alt="" />
                </div>
                <h4>Aiden King</h4>
                <p>This app allows me to do calulate my daily intake of calories from my smartphone where I want and when I want to. The interface is easy to navigate and I find everything I need quickly. I can’t wait for more!</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide__item">
                <div className="slide__img-02">
                    <img src={ava02} alt="" />
                </div>
                <h4>Lana Myers</h4>
                <p>Your customer Service staff is great and do their job very well!</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide__item">
                <div className="slide__img-03">
                    <img src={ava03} alt="" />
                </div>
                <h4>Aaron Warner</h4>
                <p>Working with FITandFAT has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.</p>
            </div>
        </SwiperSlide>

      </Swiper>
      
        </div>
    </section>
    </>

  );
}