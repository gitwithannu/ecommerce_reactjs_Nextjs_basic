
import "./product.css";
import Rating from '@mui/material/Rating';
import Product_one from "../../assets/images/product-1-1.jpg";
import { Button } from "@mui/material";
import Link from "next/link";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const Product = (props) => {
  return (
    <div className="productThumb">
       {
        props.tag !==null && props.tag !== undefined  &&
        <span className={`badge ${props.tag}`}>{props.tag}</span>
       }
        
         <Link href="#">
         <div className="imgWrapper">
          <img className="w-100" src={Product_one.src} alt="productimage"/>
            <div className="overlay transition">
              <ul className="list list-inline mb-0">
                <li className="list-inline-item" >
                  <Link className="cursor" href="#" tooltip="Add To Wishlist">
                <FavoriteBorderOutlinedIcon />
                  </Link>                
                </li>
                <li className="list-inline-item">
                  <Link className="cursor" href="#" tooltip="Compare">
                  <CompareArrowsOutlinedIcon />
                  </Link>                
                </li>
                <li className="list-inline-item">
                  <Link className="cursor" href="#" tooltip="Quick View">
                  <RemoveRedEyeOutlinedIcon />
                  </Link>                
                </li>
              </ul>
              
            </div>
         </div>
         </Link>
       
       
        <div className="info">
          <span className="d-block catName">Snack</span>
          <h4 className="title"> <Link href="#"> Seeds of Change Organic Quinoa, Brown, & Red Rice </Link></h4>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <span className="brand d-block text-g">By <Link href="#" className="text-g">NestFood</Link> </span>
        <div className="d-flex align-items-center mt-3">
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold">$28.85</span> <span className="oldPrice">$32.8</span>
          </div>
          <Button className="ml-auto"><ShoppingCartOutlinedIcon/> Add</Button>
        </div>
   
        </div>
     
    </div>
  )
};

export default Product
