'use client'

import { useState } from "react";
import MilkDairies from "../../assets/images/category-1.svg";
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Banner from '../../assets/images/banner-1.png';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function valuetext(value) {
  return `${value}°C`;
}


const Sidebar = () => {
  const [value, setValue] = useState([20, 500])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   <>
   <div className="sidebar">
    <div className="card border-0 shadow">
        <h3>Category</h3>
        <div className="catList">
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img src={MilkDairies.src} width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img src={MilkDairies.src} width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img src={MilkDairies.src} width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img src={MilkDairies.src} width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>
          </div>
        </div>
    </div>


    <div className="card border-0 shadow">
       <h3>Filter By Price</h3>
       <Slider
         min={0}
         step={1}
         max={1000}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="success"
       />
       <div className="d-flex pt-2 pb-2 priceRange">
        <span>From: <strong className="text-g"> ${value[0]} </strong> </span>
        <span className="ml-auto">From: <strong className="text-g"> ${value[1]} </strong> </span>
       </div>
       
       <div className="filters">
        <h5>Color</h5>
        <ul>
          <li> <Checkbox {...label} color="success" />Red (56) </li>
          <li> <Checkbox {...label} color="success" />Green (48) </li>
          <li> <Checkbox {...label} color="success" />Blue (30) </li>
          <li> <Checkbox {...label} color="success" />yellow (20) </li>
          <li> <Checkbox {...label} color="success" />Red (56) </li>
          <li> <Checkbox {...label} color="success" />Green (48) </li>
          <li> <Checkbox {...label} color="success" />Blue (30) </li>
          <li> <Checkbox {...label} color="success" />yellow (20) </li>
          <li> <Checkbox {...label} color="success" />Red (56) </li>
          <li> <Checkbox {...label} color="success" />Green (48) </li>
          <li> <Checkbox {...label} color="success" />Blue (30) </li>
          <li> <Checkbox {...label} color="success" />yellow (20) </li>
          <li> <Checkbox {...label} color="success" />Red (56) </li>
          <li> <Checkbox {...label} color="success" />Green (48) </li>
          <li> <Checkbox {...label} color="success" />Blue (30) </li>
          <li> <Checkbox {...label} color="success" />yellow (20) </li>                 
        </ul>
       </div>

       <div className="filters">
        <h5>Item Conditions</h5>
        <ul>
          <li> <Checkbox {...label} color="success" />New (1500) </li>
          <li> <Checkbox {...label} color="success" />used (48) </li>
          <li> <Checkbox {...label} color="success" />refurbished (27) </li>
          <li> <Checkbox {...label} color="success" />New (1500) </li>
          <li> <Checkbox {...label} color="success" />used (48) </li>
          <li> <Checkbox {...label} color="success" />refurbished (27) </li>
          <li> <Checkbox {...label} color="success" />New (1500) </li>
          <li> <Checkbox {...label} color="success" />used (48) </li>
          <li> <Checkbox {...label} color="success" />refurbished (27) </li>
          <li> <Checkbox {...label} color="success" />New (1500) </li>
          <li> <Checkbox {...label} color="success" />used (48) </li>
          <li> <Checkbox {...label} color="success" />refurbished (27) </li>
        </ul>
       </div>
        <div className="d-flex">
        <Button className="btn btn-g"> <TuneOutlinedIcon/> Filter </Button>
        </div>      
    </div>
    <img src={Banner.src} className="w-100" alt ="sidebar banner" />

   </div>
  </>
  )
};

export default Sidebar
