
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import "./nav.css";
import Link from "next/link";
const mega_menu  = require("../../../assets/images/banner-menu.png");
/* console.log('mega_menu');
console.log(mega_menu.default.src); */
const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
        <div className="container-fluid ">
            <div className="row position-relative" >
                <div className="col-sm-3 part-1 d-flex align-items-center" >
                <Button className="bg-g text-white catTab" ><GridViewIcon /> &nbsp;  Browse All Categories <KeyboardArrowDownIcon/> </Button>
                </div>
                <div className="col-sm-7 part-2 position-static">
                 <nav>
                    <ul className="list list-inline mb-0" >
                    <li className="list-inline-item"> 
                        <Button> <Link href="/">Home</Link> </Button>
                      </li>
                      <li className="list-inline-item">
                        <Button> <Link href="/about">About</Link> </Button>
                      </li>
                      <li className="list-inline-item">
                        <Button> <Link href="/">Shop</Link> </Button>
                      </li>
                      <li className="list-inline-item">
                        <Button> <Link href="/">Vendors</Link> </Button>
                      </li>
                      <li className="list-inline-item position-static ">
                        <Button> <Link href="/">Mega Menu <KeyboardArrowDownIcon/>     </Link> </Button>
                        <div className="dropdown_menu megaMenu w-100" > 
                        <div className="row">
                          <div className="col">
                            <h4 className="text-g">Fruits & Vegetables </h4>

                            <ul className="mt-4 mb-0">
                              <li><Link href="/">Meat & poultry</Link> </li>
                              <li><Link href="/">Fresh Vegetables</Link> </li>
                              <li><Link href="/">Herbs & Seasonings</Link> </li>
                              <li><Link href="/">Cuts & Sprouts</Link> </li>
                              <li><Link href="/">Exotic Fruits & Veggies</Link> </li>
                              <li><Link href="/">Packaged Produce</Link> </li>
                            </ul>
                           </div>
                           <div className="col">
                           <h4 className="text-g">Breakfast & Dairy</h4>
                           <ul className="mt-4 mb-0">
                              <li><Link href="/">Meat & poultry</Link> </li>
                              <li><Link href="/">Fresh Vegetables</Link> </li>
                              <li><Link href="/">Herbs & Seasonings</Link> </li>
                              <li><Link href="/">Cuts & Sprouts</Link> </li>
                              <li><Link href="/">Exotic Fruits & Veggies</Link> </li>
                              <li><Link href="/">Packaged Produce</Link> </li>
                            </ul>
                           </div>
                           <div className="col">
                           <h4 className="text-g">Meat & Seafood </h4>
                           <ul className="mt-4 mb-0">
                              <li><Link href="/">Meat & poultry</Link> </li>
                              <li><Link href="/">Fresh Vegetables</Link> </li>
                              <li><Link href="/">Herbs & Seasonings</Link> </li>
                              <li><Link href="/">Cuts & Sprouts</Link> </li>
                              <li><Link href="/">Exotic Fruits & Veggies</Link> </li>
                              <li><Link href="/">Packaged Produce</Link> </li>
                            </ul>
                           </div>
                           <div className="col">
                            <img src={mega_menu.default.src} alt="mega menu" className="w-100" />
                           </div>
                           
                         </div>
                         
                        </div>
                      </li>
                      <li className="list-inline-item"> 
                        <Button> <Link href="/">Blog</Link> </Button>
                      </li>
                      <li className="list-inline-item">
                        <Button> <Link href="/">Pages <KeyboardArrowDownIcon/> </Link> </Button>
                        <div className="dropdown_menu" >
                          <ul>
                            <li> <Button><Link href="/about ">About us</Link> </Button> </li>
                            <li> <Button><Link href="/about ">Contact</Link> </Button> </li>
                            <li> <Button><Link href="">My Account</Link> </Button> </li>
                            <li> <Button><Link href="/about ">Login</Link> </Button> </li>
                            <li> <Button><Link href="/about ">Regiter</Link> </Button> </li>
                            <li> <Button><Link href="/about ">Forget Password</Link> </Button> </li>
                            <li> <Button><Link href="/about ">Rest password</Link> </Button> </li>
                            <li> <Button><Link href="/about ">Purchase Guid</Link> </Button> </li>
                            <li> <Button><Link href="/about ">Privacy Police</Link> </Button> </li>
                            <li> <Button><Link href="/about ">404 Page </Link> </Button> </li>

                          </ul>

                        </div>
                      </li>
                      <li className="list-inline-item">
                        <Button> <Link href="/">Contact</Link> </Button>
                      </li>
                      
                      
                      
                    </ul>
                 </nav>

                </div>
                <div className="col-sm-2 part-3 d-flex align-items-center ">
                      <div className="phNo d-flex align-items-center ml-auto">
                        <span> <HeadphonesOutlinedIcon/> </span>
                        <div className="info ml-3">
                         <h3 className="text-g mb-0 ">1900 - 888</h3>
                         <p className="mb-0" > 24/7 Support Center </p>
                        </div>  
                      </div>
                </div>

            </div>

        </div>
      
    </div>
  )
};

export default Nav
