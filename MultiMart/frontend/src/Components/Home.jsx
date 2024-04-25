import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import Banner from "./Banner"
import Category from './Category';
import ProductContainer from './ProductContainer';
import Footer from "./Footer"

import { useNavigate } from "react-router-dom";
function Home() {

  const navigate=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:8000/verify", {
      withCredentials: true // Ensure cookies are sent with the request
    })
      .then(res=>{
          if(res.data.status){

          }
          else{
              navigate('/login')
          }
      })
  },[])

  return (
    <div>
     
        <Banner/>
        <Category/>
        <ProductContainer/>
        <Footer/>
    </div>
  )
}

export default Home