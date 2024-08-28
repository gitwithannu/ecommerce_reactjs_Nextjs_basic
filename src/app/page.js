'use client'
import Image from "next/image";
import styles from "./page.module.css";
import HomeSlider from "../components/home/homeslider";
import CatSlider from "../components/catslider/catslider";
import Banner from "../components/banner/banner";
import Product from "../components/products/product";
import Banner_with_product from  "../assets/images/Banner-with-product.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import TopProducts from "../components/home/topproducts/topProducts";

const slider_one  = require("../assets/images/slider/slider-1.png");
const slider_two  = require("../assets/images/slider/slider-2.png");


export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,   
    arrows:true,
    autoplay:true,
    centerMode:true,

  };
  return (
    <div>
        <h1 className="text-danger" >testing</h1>
        <HomeSlider />
        <CatSlider />
        <Banner/>
        <section className="homeProducts">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <h2 className="hd mb-0 mt-0"> Popular Products</h2>
              <ul className="list list-inline ml-auto filterTab mb-0">
                <li className="list-inline-item">
                  <a className="cursor">All</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Milks & Dairies</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Coffes & Teas</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Pet Foods</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Meats</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Vegetables</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Fruits</a>
                </li>                   
              </ul>
            </div>

            
            <div className="productRow">
              <div className="item">
              <Product />
              </div>
               <div className="item">
               <Product tag="hot"/>
              </div>
              <div className="item">
               <Product  tag="sale"/>
              </div>
              <div className="item">
               <Product tag="new"/>
              </div>
              <div className="item">
               <Product tag="best"/>
              </div> 
              <div className="item">
               <Product tag="new"/>
              </div> 
              <div className="item">
               <Product  tag="hot"/>
              </div> 
              <div className="item">
               <Product tag="best"/>
              </div> 
              <div className="item">
               <Product tag="sale" />
              </div> 
              <div className="item">
               <Product  tag="hot"/>
              </div> 
              <div className="item">
               <Product  tag="new"/>
              </div> 
                
            </div>  


          </div>
        </section>



        <section className="homeProducts homeProductsRow2 pt-0">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <h2 className="hd mb-0 mt-0"> Daily Best Sells</h2>
              <ul className="list list-inline ml-auto filterTab mb-0">
                <li className="list-inline-item">
                  <a className="cursor">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Popular</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">New added</a>
                </li>                
              </ul>
            </div>
               <br/> <br/>
            <div className="row">
               <div className="col-md-3 " >
                <img src={ Banner_with_product.src } alt="banner with product" className="w-100 Banner_with_product " />
               </div>
               <div className="col-md-9">
              
                <Slider {...settings} className="prodSlider">
                  <div className="item">
                  <Product tag="hot"/>
                  </div>
                  <div className="item">
                  <Product tag="new"/>
                  </div>
                  <div className="item">
                  <Product tag="sale"/>
                  </div>
                  <div className="item">
                  <Product tag="bes"/>
                  </div>
                  <div className="item">
                  <Product tag="hot"/>
                  </div>
                  <div className="item">
                  <Product tag="sale"/>
                  </div>
                  <div className="item">
                  <Product tag="hot"/>
                  </div>
                  <div className="item">
                  <Product tag="hot"/>
                  </div>
                </Slider>
               </div>
            </div>  

          </div>
        </section>

        <section className="topProductsSection">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <TopProducts title="Top Selling" />
              </div>
              <div className="col">
                <TopProducts title="Trending Products"/>
              </div>
              <div className="col">
                <TopProducts title="Recently added"/>
              </div>
              <div className="col">
                <TopProducts title="Recently added" />
              </div>
            </div>
          </div>
        </section>   
    </div>

  );
}
