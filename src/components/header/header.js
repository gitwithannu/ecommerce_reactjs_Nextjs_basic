
'use client'  
import React, { useEffect, useRef, useState } from "react";
import "../header/header.css"
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import Logo  from "../../assets/images/logo.svg";
import profilePic from '../../assets/images/logo.svg';
import Select from "../selectDrop/select";  
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from "../../assets/images/icon-compare.svg"
import IconHart from "../../assets/images/icon-heart.svg"
import IconCart from "../../assets/images/icon-cart.svg"
import IconUser from "../../assets/images/icon-user.svg"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Button from '@mui/material/Button';
import Nav from "./nav/nav";

//console.log(Logo);  // This should log the URL as a strin


const Header = () => {
  const [category,setcategory]  = useState([
    "Milks and Dairies",
    "Clothing & beauty",
    "Pet Foods & Toy",
    "Baking material",
    "Fresh Fruit" ] )

  const [isOpenDropDown, setisOpenDropDown] = useState(false);

    const countriesList = [];

    const headerRef = useRef(null);

    useEffect(()=>{
      getCountry('https://countriesnow.space/api/v0.1/countries/');
    },[])
    
    const getCountry = async (url) =>{

      try {
       await axios.get(url).then((res)=>{
          if(res !=null){
            res.data.data.map((item,index)=>{
              countriesList.push(item.country)
            } )       
          }     
        })
      } catch (error) {
        console.log(error.message);
      }
    }

    useEffect( ()=>{
      window.addEventListener("scroll", () => {
        let position = window.pageYOffset;
       /*  console.log(position) */;
        if (position > 100) {
            headerRef.current.classList.add("fixed");
        } else {
            headerRef.current.classList.remove("fixed");
        }
    });
    },[])
  return (
    <>
    <div className="headerWrapper" ref={headerRef} >
      <header > 
          <div className="container-fluid">  
            <div className="row">
              <div className="col-sm-2" >
                  <img src={Logo.srcc} alt="Logo" />
              </div>
              <div className="col-sm-5">
                  <div className="headerSearch d-flex align-items-center">
                  
                    <Select data={category}  placeholder="All Categories" icon={false} />
                    <div className="search">
                      <input type="text" placeholder="search for items..." />
                      <SearchIcon className="searchIcon cursor " />
                    </div>
                  </div>
              </div>
              <div className="col-sm-5 d-flex align-items-center">
                <div className="ml-auto d-flex align-items-center">
                  <div className="countryWrapper">
                  <Select data={ countriesList } placeholder="Your Location" icon=
                  {<LocationOnOutlinedIcon style={{opacity:0.5}} /> } />
                </div>
                <ul className="list list-inline mb-0 headerTabs" >
                  <li className="list-inline-item"><span> 
                    <img src={IconCompare.src} alt="compare" /> 
                    <span className="badge bg-success rounded-circle">4</span>
                    Compare 
                    </span>
                  </li> 
                  <li className="list-inline-item"><span> 
                    <img src={IconHart.src} alt="compare" /> 
                    <span className="badge bg-success rounded-circle">2</span>
                    Whislis 
                    </span>
                  </li>   
                  <li className="list-inline-item"><span> 
                    <img src={IconCart.src} alt="compare" /> 
                    <span className="badge bg-success rounded-circle">5</span>
                    Cart 
                    </span>
                  </li>  
                  <li className="list-inline-item" >
                    <span onClick={()=>{setisOpenDropDown(!isOpenDropDown)}}> 
                    <img src={IconUser.src} alt="compare" />                  
                    user 
                    </span>
                    {
                      isOpenDropDown !== false  && 
                      <ul className="dropdownMenu">
                      <li> <Button className="align-items-center"> <Person2OutlinedIcon />My Account</Button></li>
                      <li> <Button > <FavoriteBorderOutlinedIcon/>Order Tracking </Button></li>
                      <li> <Button ><FavoriteBorderOutlinedIcon/>My Whishlist</Button></li>
                      <li> <Button variant="text"><SettingsOutlinedIcon/> Setting </Button></li>
                      <li> <Button variant="text"><LogoutOutlinedIcon/>Sign Out</Button></li>
                    </ul>
                    }
                    
                  </li>     
                </ul> 
                </div> 
              </div>  
            </div> 
          
          </div>
      </header>
      <Nav/>
    </div>
    </>
   
    
  )
};

export default Header
