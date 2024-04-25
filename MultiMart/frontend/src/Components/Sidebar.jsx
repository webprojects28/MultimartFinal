import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";
import "./Sidebar.css"
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { womenclothes } from './womenclothes';

function Sidebar() {
  const [prod,setprod] =useState();
  

  useEffect(() => {
  
      const resultArray = [].concat(...Object.values(womenclothes));
      setprod(resultArray.slice(0,6))
 
 }, []);

  return (
    <div className="sidebar  has-scrollbar" data-mobile-menu>

    <div className="product-showcase">

      <h3 className="showcase-heading">best sellers</h3>

      <div className="showcase-wrapper">

        <div className="showcase-container ">

          {
             prod?
             prod.map(item => (
              
               <Link to={`/category/womenclothing/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

                     <div className="showcase-img-box">
                        <img src={item.image} alt="baby fabric shoes" width="60" height="60"
                          className="showcase-img"/>
                      </div>

                      <div className="showcase-content">

                      <div>
                          <h4 className="showcase-title">{item.title}</h4>
                        </div>

                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>

                        <div className="price-box">
                          <del>₹{item.price}</del>
                          <p className="price">₹{item.price}</p>
                        </div>

                      </div>

                   </div>
               </Link>
             ))
                 
             :<h1>...Loading</h1>
          }
        


        </div>

      </div>

    </div>

  </div>
  )
}

export default Sidebar