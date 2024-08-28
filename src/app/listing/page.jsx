"use client"
import Link from "next/link";
import Product from "../../components/products/product";
import Sidebar from "../../components/sidebar/sidebar";
import { Button } from "@mui/material";
import { useState } from "react";

const page = () => {
  const [countoption, Setcountoption]= useState(false);
  const [featureoption, Setfeatureoption]= useState(false);
  return (
    <section className="listingPage">
        <div className="container-fluid">
            <div className="breadcrumb flex-column">
                <h1>Snack</h1>
                <ul className="list list-inline mb-0 ">
                    <li className="list-inline-item">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="#">Shop</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="#">Snack</Link>
                    </li>
                </ul>
                
            </div>

            <div className="listingData">
                <div className="row">
                  <div className="col-md-3 sidebarWrapper">
                   <Sidebar />
                  </div>
                  <div className="col-md-9 rightContent homeProducts pt-0">
                    <div className="topStrip d-flex align-items-center">
                      <p className="mb-0">We found <span className="text-success"> 29 </span>items for you! </p> 
                      <div className="ml-auto d-flex align-items-center">
                        <div className="tab_ position-relative">
                          <Button className="btn" onClick={ ()=> Setcountoption(!countoption) } >Show:50</Button>
                          {
                           countoption !== false  && 
                            <ul className="dropdownMenu">
                              <li> <Button className="align-items-center"onClick={ ()=> Setcountoption(false) }> 50</Button></li>
                              <li> <Button className="align-items-center"onClick={ ()=> Setcountoption(false) }> 100</Button></li>
                              <li> <Button className="align-items-center"onClick={ ()=> Setcountoption(false) }> 150</Button></li>
                              <li> <Button className="align-items-center"onClick={ ()=> Setcountoption(false) }> 200</Button></li>
                              <li> <Button className="align-items-center"onClick={ ()=> Setcountoption(false) }> 250</Button></li>
                            </ul>
                         }
                        </div>
                        <div className="tab_ position-relative ml-3">
                          <Button className="btn" onClick={ ()=> Setfeatureoption(!featureoption)}>Sort by:Featured </Button>
                          {
                            featureoption !== false  && 
                            <ul className="dropdownMenu">
                              <li> <Button className="align-items-center" onClick={ ()=> Setfeatureoption(false)}> Featured</Button></li>
                              <li> <Button className="align-items-center" onClick={ ()=> Setfeatureoption(false)}> Price: Low to High</Button></li>
                              <li> <Button className="align-items-center" onClick={ ()=> Setfeatureoption(false)}> Price: High to Low</Button></li>
                              <li> <Button className="align-items-center" onClick={ ()=> Setfeatureoption(false)}> Release Date</Button></li>
                              <li> <Button className="align-items-center" onClick={ ()=> Setfeatureoption(false)}> Avg. Rating</Button></li>
                            </ul>
                          }
                        </div>
                       
                       
                      </div>
                    </div>
                    <div className="productRow pl-4 pr-3">
                       <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        <div className="item">
                          <Product/>
                        </div>
                        

                    </div>

                  </div>

                </div>

            </div>

        </div>
    </section>
  )
};

export default page
