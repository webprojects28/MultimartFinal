import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";
import { menclothes } from './menclothes';
import { useState ,useEffect } from 'react';
import axios from 'axios';

function Trending() {

  const [prod,setprod] =useState();
  const baseURL=`https://fakestoreapi.com/products/category/menclothing`

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const resultArray = [].concat(...Object.values(menclothes));
      setprod(resultArray.slice(0,6));
     
   });
 }, []);

  return (
    <div className="product-showcase">

        <h2 className="title">Trending</h2>

        <div className="showcase-wrapper has-scrollbar">

          <div className="showcase-container">

          {
             prod?
             prod.map((item,index) => (
              index<3?
               <Link to={`/category/menclothing/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

             <div  className="showcase-img-box">
                <img src={item.image} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
              </div>

              <div className="showcase-content">

               <div >
                  <h4 className="showcase-title">{item.title}</h4>
                </div>

               <div className="showcase-category">Men's clothing</div>

                <div className="price-box">
                  <p className="price">₹{item.price}</p>
                  <del>₹{item.price}</del>
                </div>

              </div>

            </div>
               </Link>:''
             ))
                 
             :<h1>...Loading</h1>
          }
        
          </div>
          <div className="showcase-container">

          {
             prod?
             prod.map((item,index) => (
                index>=3?
               <Link to={`/category/menclothing/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

             <div  className="showcase-img-box">
                <img src={item.image} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
              </div>

              <div className="showcase-content">

               <div>
                  <h4 className="showcase-title">{item.title}</h4>
                </div>

               <div  className="showcase-category">menclothing</div>

                <div className="price-box">
                  <p className="price">₹{item.price}</p>
                  <del>₹{item.price}</del>
                </div>

              </div>

            </div>
               </Link> :''
             ))
                 
             :<h1>...Loading</h1>
          }
        
          </div>

        </div>

      </div>
  )
}

export default Trending

