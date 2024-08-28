'use client'  
import React, { useEffect, useState } from "react";
require( './catslider.css');
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const CatSlider = () => {
  const [itemBg, setItemBg] = useState ([
    '#fffceb',
    'tecffec',
    '#feefea',
    '#fFF3eb',
    '#fff3ff',
    '#f2Fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    'tecffec',
    '#feefea',
    '#ff¥3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#ffFfceb',
    '#feefea',
    '#tecffec'
  ])
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,   
    arrows:true,
    autoplay:2000,
  };
  return (
    <div className="catSliderSection">
      <div className="container-fluid">
            <div className="title">
                <h2 className="hd">Featured Categories a</h2>
                <Slider {...settings} className="cat_slider_Main">
                <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                      <h5>Cake & Milk </h5>
                      <p> 28 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                      <h5>Oganic Kiwi </h5>
                      <p> 26 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" />
                      <h5>Peach </h5>
                      <p> 14 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                      <h5>Red Apple </h5>
                      <p> 54 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" />
                      <h5>Snack </h5>
                      <p> 56 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" />
                      <h5>Vegetables </h5>
                      <p> 72 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                      <h5>Strawberry </h5>
                      <p> 36 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                      <h5>Black plum </h5>
                      <p> 123 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                      <h5>Custard apple </h5>
                      <p> 34 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                      <h5>Coffe & Tea </h5>
                      <p> 89 items </p>
                    </div>                  
                  </div>


                {/*  extra slide */}
                <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                      <h5>Strawberry </h5>
                      <p> 36 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                      <h5>Black plum </h5>
                      <p> 123 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                      <h5>Custard apple </h5>
                      <p> 34 items </p>
                    </div>                  
                  </div>
                  <div className='item'>
                    <div className="info">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                      <h5>Coffe & Tea </h5>
                      <p> 89 items </p>
                    </div>                  
                  </div>
                   
                  
                </Slider>  

                <ul className="list-inline nav nav-tabs links">
                    <li className="list-inline-item nav-item"><a className="nav-link" href="shop-grid-right.html">Cake &amp; Milk</a></li>
                    <li className="list-inline-item nav-item"><a className="nav-link" href="shop-grid-right.html">Coffes &amp; Teas</a></li>
                    <li className="list-inline-item nav-item"><a className="nav-link active" href="shop-grid-right.html">Pet Foods</a></li>
                    <li className="list-inline-item nav-item"><a className="nav-link" href="shop-grid-right.html">Vegetables</a></li>
                </ul>
            </div>

     </div>
    </div>
  )
};

export default CatSlider
