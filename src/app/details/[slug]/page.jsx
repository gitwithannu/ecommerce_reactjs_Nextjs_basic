"use client"
import Link from "next/link"
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './page.module.css';
import { useRef, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from "@mui/material";
import Sidebar from "../../../components/sidebar/sidebar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from "../../../components/products/product";


const page = () => {

   const [zoomImg , SetZoomImag] = useState('https://dummyjson.com/image/1500x1500/008080/ffffff?text=Hello+Peter')
   
   const [bigImageSize , SetBigImageSize] = useState('1500','1500')
   const [smlImageSize, SetSmlImageSie] = useState('150','150')
   const [activeSize, SetActiveSize]  = useState(0);
   const [inputValue, SetinputValue] = useState(1);
   const [activeTab , SetActiveTab] = useState(2)
   const zoomSlider  = useRef();
   const zoomSliderBig  = useRef();

   
   

   const goto = (eve)=>{
    console.log(eve.target.src);
    const dataIndex =  eve.target.getAttribute('dataIndex');
    //const newString = eve.target.src.replace("150x150", "1500x1500");
    //SetZoomImag(newString)
    zoomSlider.current.slickGoTo(dataIndex);
    zoomSliderBig.current.slickGoTo(dataIndex);
    
   }
   const activeSizeHandler = (index) =>{
    SetActiveSize(index)
   }

   const plus =()=>{
    SetinputValue(inputValue+1);
   }
   const minus =() =>{
    if(inputValue !== 1){
      SetinputValue(inputValue-1);
    }

   }

   const settingsBig = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,   
    arrows:false,
  };
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,   
    arrows:true,
  };

  const relatedProduct = {
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
   <section className="detailsPage mb-5">
    <div className="breadcrumbWrapper mb-4">
     <div className="container-fluid">
      <ul class="breadcrumb breadcrumb2 mb-0">
        <li><Link href=""> Home </Link></li>
        <li><Link href="">Vegetables & tubers </Link></li>
        <li><Link href="">Seeds of Change Organic </Link></li>
        <li>Italy</li>
      </ul> 
     </div>  
     </div>
    <div className="container detailsContainer pt-3 pb-3">
      <div className="row">
            {/* ProductZoom code start here */} 
            <div className="col-md-5 ">
              <div className="productZoom">    
              <Slider {...settingsBig} className="zoomSlider" ref={zoomSliderBig}>
              <div className="item">
               <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://dummyjson.com/image/1500x1500/008080/ffffff?text=Juice" className="w-100" onClick={goto}/>
                </div>
                <div className="item">
               <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://dummyjson.com/image/1500x1500/8181/ffffff?text=Banana" className="w-100" onClick={ goto}/>
                </div>
                <div className="item">
               <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://dummyjson.com/image/1500x1500/551/ffffff?text=Water+malon" className="w-100" onClick={goto}/>
                </div>
                <div className="item">
               <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://dummyjson.com/image/1500x1500/555/ffffff?text=Apple" className="w-100" onClick={goto} />
                </div>
                <div className="item">
               <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://dummyjson.com/image/1500x1500/342/ffffff?text=Draggen+Fruit" className="w-100" onClick={goto} />
                </div>
                <div className="item">
               <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://dummyjson.com/image/1500x1500/742/ffffff?text=Mango" className="w-100" onClick={goto}/>
                </div>
                <div className="item">
               <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://dummyjson.com/image/1500x1500/288/ffffff?text=Coconet+Water" className="w-100" onClick={goto} />
                </div>
                <div className="item">
               <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://dummyjson.com/image/1500x1500/991/ffffff?text=Cherry" className="w-100" onClick={goto}/>
                </div>
              </Slider>
              </div>

              <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                <img dataIndex="0" src="https://dummyjson.com/image/150x150/008080/ffffff?text=Juice" className="w-100" onClick={goto}/>
                </div>
                <div className="item">
                <img dataIndex="1" src="https://dummyjson.com/image/150x150/8181/ffffff?text=Banana" className="w-100" onClick={ goto}/>
                </div>
                <div className="item">
                <img  dataIndex="2"src="https://dummyjson.com/image/150x150/551/ffffff?text=Water+malon" className="w-100" onClick={goto}/>
                </div>
                <div className="item">
                <img dataIndex="3" src="https://dummyjson.com/image/150x150/555/ffffff?text=Apple" className="w-100" onClick={goto} />
                </div>
                <div className="item">
                <img dataIndex="4" src="https://dummyjson.com/image/150x150/342/ffffff?text=Draggen+Fruit" className="w-100" onClick={goto} />
                </div>
                <div className="item">
                <img src="https://dummyjson.com/image/150x150/742/ffffff?text=Mango" className="w-100" onClick={goto}/>
                </div>
                <div className="item">
                <img src="https://dummyjson.com/image/150x150/288/ffffff?text=Coconet+Water" className="w-100" onClick={goto} />
                </div>
                <div className="item">
                <img src="https://dummyjson.com/image/150x150/991/ffffff?text=Cherry" className="w-100" onClick={goto}/>
                </div>
              </Slider>
            </div>
             {/* ProductZoom code end here */}

             {/* ProductInfo code start here */}
            <div className="col-md-7 productInfo">
              <h1>Seeds of Change Organic Quinoa, Brown</h1>
              <div className="d-flex align-items-center mb-4">
               <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
               <span className="text-light">(32 reviews)</span>
              </div>
           
            
              <div className="priceSection d-flex align-items-center mb-3">
                <span className="text-g priceLarge">$38</span>
                <div className="ml-2 d-flex flex-column">
                  <span className="text-org">26% off</span>
                  <span className="text-light oldPrice"> $52</span>
                </div>
              </div>
             
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item"> <a className={`tag ${activeSize === 0 ? 'active':''}`}
                   onClick={ ()=> activeSizeHandler(0)}>50g</a> </li>
                  <li className="list-inline-item"> <a className={`tag ${activeSize === 1 ?'active' : '' }`} onClick={ ()=>activeSizeHandler(1)}>80g</a> </li>
                  <li className="list-inline-item"> <a className={`tag ${activeSize === 2 ?'active' : '' }`} onClick={ ()=>activeSizeHandler(2)}>100g</a> </li>
                  <li className="list-inline-item"> <a className={`tag ${activeSize === 3 ?'active' : '' }`} onClick={ ()=>activeSizeHandler(3)}>150g</a> </li>
                </ul>
              </div>
              <div className="addCartSection pt-4 pb-4 d-flex align-center">
                <div className="counterSec mr-5">
                  <input type="number" value={inputValue} />
                  <span className="arrow plus"onClick={plus}><KeyboardArrowUpIcon/></span>
                  <span className="arrow minus"onClick={minus}><KeyboardArrowDownIcon/></span>                  
                </div>
                <Button className="btn-g">Add to Cart</Button>


              </div>

            </div>
             {/* ProductInfo code end here */}
      </div>
      
      <div className="card mt-5 p-5 detailsPageTabs">
        <div className="customTabs">
          <ul className="list list-inline">
            <li className="list-inline-item">
              <Button className={ activeTab === 0 && 'active'} onClick={ () => SetActiveTab(0)}>Description</Button>
            </li>
            <li className="list-inline-item">
              <Button className={ activeTab === 1 && 'active'}  onClick={ () => SetActiveTab(1)}>Additional Info</Button>
            </li>
            <li className="list-inline-item">
              <Button className={ activeTab === 2 && 'active'}  onClick={ () => SetActiveTab(2)}>Reivew</Button>
            </li>
          </ul>
          <br></br>
          { 
              activeTab === 0 &&   

            <div className="tabContent">
              <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
              </p>
              <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
            </div>
          
          }

          {
            activeTab === 1 &&

            <div className="tabContent">
            <div className="table-responsive">
            <table class="font-md">
              <tbody>
                  <tr class="stand-up">
                      <th>Stand Up</th>
                      <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                      </td>
                  </tr>
                  <tr class="folded-wo-wheels">
                      <th>Folded (w/o wheels)</th>
                      <td>
                          <p>32.5″L x 18.5″W x 16.5″H</p>
                      </td>
                  </tr>
                  <tr class="folded-w-wheels">
                      <th>Folded (w/ wheels)</th>
                      <td>
                          <p>32.5″L x 24″W x 18.5″H</p>
                      </td>
                  </tr>
                  <tr class="door-pass-through">
                      <th>Door Pass Through</th>
                      <td>
                          <p>24</p>
                      </td>
                  </tr>
                  <tr class="frame">
                      <th>Frame</th>
                      <td>
                          <p>Aluminum</p>
                      </td>
                  </tr>
                  <tr class="weight-wo-wheels">
                      <th>Weight (w/o wheels)</th>
                      <td>
                          <p>20 LBS</p>
                      </td>
                  </tr>
                  <tr class="weight-capacity">
                      <th>Weight Capacity</th>
                      <td>
                          <p>60 LBS</p>
                      </td>
                  </tr>
                  <tr class="width">
                      <th>Width</th>
                      <td>
                          <p>24″</p>
                      </td>
                  </tr>
                  <tr class="handle-height-ground-to-handle">
                      <th>Handle height (ground to handle)</th>
                      <td>
                          <p>37-45″</p>
                      </td>
                  </tr>
                  <tr class="wheels">
                      <th>Wheels</th>
                      <td>
                          <p>12″ air / wide track slick tread</p>
                      </td>
                  </tr>
                  <tr class="seat-back-height">
                      <th>Seat back height</th>
                      <td>
                          <p>21.5″</p>
                      </td>
                  </tr>
                  <tr class="head-room-inside-canopy">
                      <th>Head room (inside canopy)</th>
                      <td>
                          <p>25″</p>
                      </td>
                  </tr>
                  <tr class="pa_color">
                      <th>Color</th>
                      <td>
                          <p>Black, Blue, Red, White</p>
                      </td>
                  </tr>
                  <tr class="pa_size">
                      <th>Size</th>
                      <td>
                          <p>M, S</p>
                      </td>
                  </tr>
              </tbody>
            </table>

            </div>
            </div>  

          }

          {
            activeTab === 2 && 
            
            <div className="tabContent">
              <div className="row">
                <div className="col-md-8">
                   <h3>Customer questions & answers</h3>
                   <br></br>
                   <div className="card p-3 reviewsCard flex-row">
                     <div className="image">
                      <div className="rounded-circle">
                          <img src=" https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                      </div>
                      <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                     </div>
                      <div className="info pl-10">
                        <div className="d-flex align-items-center">
                          <h6 className="text-light"> December 4, 2022 at 3:12 pm  </h6>
                          <div className="ml-auto">
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                          </div>
                        </div>  
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                       </div>
                   </div>
                   <div className="card p-3 reviewsCard flex-row">
                     <div className="image">
                      <div className="rounded-circle">
                          <img src=" https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                      </div>
                      <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                     </div>
                      <div className="info pl-10">
                        <div className="d-flex align-items-center">
                          <h6 className="text-light"> December 4, 2022 at 3:12 pm  </h6>
                          <div className="ml-auto">
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                          </div>
                        </div>  
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                       </div>
                   </div>
                   <div className="card p-3 reviewsCard flex-row">
                     <div className="image">
                      <div className="rounded-circle">
                          <img src=" https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                      </div>
                      <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                     </div>
                      <div className="info pl-10">
                        <div className="d-flex align-items-center">
                          <h6 className="text-light"> December 4, 2022 at 3:12 pm  </h6>
                          <div className="ml-auto">
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                          </div>
                        </div>  
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                       </div>
                   </div>
                   <div className="card p-3 reviewsCard flex-row">
                     <div className="image">
                      <div className="rounded-circle">
                          <img src=" https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                      </div>
                      <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                     </div>
                      <div className="info pl-10">
                        <div className="d-flex align-items-center">
                          <h6 className="text-light"> December 4, 2022 at 3:12 pm  </h6>
                          <div className="ml-auto">
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                          </div>
                        </div>  
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                       </div>
                   </div>
                   
                  <br/>
                  <br/>
                  <form className="reviewForm">
                    <h4> Add a Reivew</h4>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Writte a Review"></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                         <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name"/>
                          </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                      </div>   
                    </div>

                    <div className="form-group">
                          <input type="text" className="form-control" placeholder="Website"/>
                     </div>
                     <div className="form-group">
                      <Button className="btn-g btn-lg"> Submit Review</Button>
                     </div>
                  </form>


                </div>

                <div className="col-md-4 pl-5">
                <h4>Customer reviews</h4> 
                  <div className="d-flex align-items-center mt-2">
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <strong className="ml-3">4.8 out of 5</strong>
                  </div>

                  <br/>

                 




                  <div className="progressBarBox d-flex align-items-center">
                    <span className="mr-5"> 5 Star </span>
                    <div class="progress" style={{width:'85%'}} >
                      <div class="progress-bar bg-success" role="progressbar" style={{width:'75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                                              
                  </div>
                  <div className="progressBarBox d-flex align-items-center">
                    <span className="mr-5"> 4 Star </span>
                    <div class="progress" style={{width:'85%'}} >
                      <div class="progress-bar bg-success" role="progressbar" style={{width:'50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                                              
                  </div>
                  <div className="progressBarBox d-flex align-items-center">
                    <span className="mr-5"> 3 Star </span>
                    <div class="progress" style={{width:'85%'}} >
                      <div class="progress-bar bg-success" role="progressbar" style={{width:'5%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                                              
                  </div>
                  <div className="progressBarBox d-flex align-items-center">
                    <span className="mr-5"> 2 Star </span>
                    <div class="progress" style={{width:'85%'}} >
                      <div class="progress-bar bg-success" role="progressbar" style={{width:'0%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                                              
                  </div>
                  <div className="progressBarBox d-flex align-items-center">
                    <span className="mr-5"> 1 Star </span>
                    <div class="progress" style={{width:'85%'}} >
                      <div class="progress-bar bg-success" role="progressbar" style={{width:'0%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                                              
                  </div>


                </div>  

              </div>

            </div>
            
          }


          
        </div>

      </div>
      
      <div className="relatedProducts pt-5 pb-4">
      <h2 class="hd mb-0 mt-0"> Popular Products</h2>
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

   </section>
  )
};

export default page
