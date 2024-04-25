import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";
import { electronics } from './electronic';
import { useState ,useEffect } from 'react';
import axios from 'axios';

function NewArrival() {

  const [prod,setprod] =useState();

  useEffect(() => {
   
     
       const resultArray = [].concat(...Object.values(electronics));
       let ans=[];
       for(let i=0;i<6;i++)ans.push(resultArray[i]);
       setprod(ans);

   
 }, []);

  return (
    <div className="product-showcase">

        <h2 className="title">New Arrivals</h2>

        <div className="showcase-wrapper has-scrollbar">

          <div className="showcase-container">

          {
             prod?
             prod.map((item,index) => (
              index<3?
               <Link to={`/category/electronics/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

             <div className="showcase-img-box">
                <img src={item.image} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
              </div>

              <div className="showcase-content">

               <div >
                  <h4 className="showcase-title">{item.title}</h4>
                </div>

               <div  className="showcase-category">Electronics</div>

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
               <Link to={`/category/electronics/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

             <div  className="showcase-img-box">
                <img src={item.image} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
              </div>

              <div className="showcase-content">

               <div >
                  <h4 className="showcase-title">{item.title}</h4>
                </div>

               <div  className="showcase-category">Electronics</div>

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

export default NewArrival