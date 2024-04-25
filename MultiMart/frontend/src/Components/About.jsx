import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function About() {
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
    <div>About</div>
  )
}

export default About