
import "./topProducts.css";
import thumbnail1 from "../../../assets/images/thumbnail-1.jpg";
import Link from "next/link";
import { Rating } from "@mui/material";
const TopProducts = (props) => {
  return (
    <>
    <div className="topselling_box">
        {
            props.title !==null && props.title != undefined 
           
        }
        <h3>{props.title}</h3>
        <div className="items d-flex align-items-center">
          <div className="img">
          <img src= {thumbnail1.src} alt="thumbnail" className="w-100" />
          </div>
          <div className="info px-3">
           <Link href="#"> <h4> Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
           <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
           <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold">$28.85</span> <span className="oldPrice">$32.8</span>
           </div>
          </div>

        </div>
        <div className="items d-flex align-items-center">
          <div className="img">
          <img src= {thumbnail1.src} alt="thumbnail" className="w-100" />
          </div>
          <div className="info px-3">
           <Link href="#"> <h4> Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
           <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
           <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold">$28.85</span> <span className="oldPrice">$32.8</span>
           </div>
          </div>

        </div>
        <div className="items d-flex align-items-center">
          <div className="img">
          <img src= {thumbnail1.src} alt="thumbnail" className="w-100" />
          </div>
          <div className="info px-3">
           <Link href="#"> <h4> Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
           <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
           <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold">$28.85</span> <span className="oldPrice">$32.8</span>
           </div>
          </div>

        </div>
        
    </div>
      
    </>
  )
};

export default TopProducts
