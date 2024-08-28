'use client'
import React from 'react';
import dynamic from 'next/dynamic';
require( './homeslider.css');
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NewsLetter from '../newsletter/newsletter';


const slider_one  = require("../../assets/images/slider/slider-1.png");
const slider_two  = require("../../assets/images/slider/slider-2.png");
/* const slider_three  = require("../../assets/images/slider/slider-3.png");
const slider_four  = require("../../assets/images/slider/slider-4.png"); */

// Dynamically import react-slick
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,   
    arrows:true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
          <div className='item'>
            <img src={slider_one.default.src} className='w-100' />
            <div className='info'>
              <h2 class="mb-4">
                  Don’t miss amazing<br/>
                  grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className='item'>
            <img src={slider_two.default.src} className='w-100' />
            <div className='info'>
              <h2 class="mb-4">
                 Fresh Vegetables<br/>
                 Big discount
              </h2>
              <p>Save up to 50% off on your first order</p>
            </div>  
          </div>
{/*           <div className='item'>
            <img src={slider_three.default.src} className='w-100' />
          </div>
          <div className='item'>
            <img src={slider_four.default.src} className='w-100' />
          </div> */}        
        </Slider>
         <NewsLetter/>
      </div>
    </section>
  );
};

export default HomeSlider;
