import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import NewProductCard from './NewProductCard';
import './CategoryPage.css'
import { grocery } from './grocery';
import {electronics} from './electronic';
import { menclothes } from './menclothes';
import { womenclothes } from './womenclothes';
import { jewelery } from './jewelery';
import { useNavigate } from "react-router-dom";
function CategoryPage({refreshPage}) {
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




  const [prod,setprod] =useState();
  const category = useParams().category;
  var baseURL;
  console.log("hey i am in the category page ", category , " and the data is ",grocery)
 console.log(category)

  if(category=='beautyproducts')
  {
    baseURL="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  }
  else if(category=='grocery')
  {
    baseURL="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  }
  else{
     baseURL=`https://fakestoreapi.com/products/category/${category}`
  }
  
   useEffect(() => {
    console.log("hey i am runnning with nike shoes on")
       axios.get(baseURL).then((response) => {

          if(category=='grocery')
          {
            const resultArray = [].concat(...Object.values(grocery));
            setprod(resultArray);
          }
          else if(category==='menclothing'){
            const resultArray = [].concat(...Object.values(menclothes));
            setprod(resultArray);
          }
          else if(category==='womenclothing')
          {
            const resultArray = [].concat(...Object.values(womenclothes));
            setprod(resultArray);
          }
          else if(category=='electronics')
          {
           const resultArray = [].concat(...Object.values(electronics));
           setprod(resultArray)
          }
          else if(category==='jewelery')
          {
            const resultArray = [].concat(...Object.values(jewelery));
            setprod(resultArray)
          }
          else {
             setprod(response.data);
             
          }
          console.log(response.data)
      });
    }, [refreshPage]);

  return (
    <div className="CatergorypageContainer">

   
    <div className="product-main">

    <h2 className="title">Category : {category}</h2>


    <div className="product-grid">

     {category == 'beautyproducts' ?  
     
     
     
               prod?
               prod.map((item,index) => (
                <Link to={`/product/${item.brand}/${item.id}`}  key={index}>
                       <NewProductCard 
                       img1={item.api_featured_image}
                       img2={item.api_featured_image}
                       salepercent={15} 
                       brand={item.brand}
                       name = {item.name}
                       price={Math.ceil(item.price)}
                       id={item.id}
                       key={item.id} />
                       
                </Link>
               )) 
               :<h1>...Loading</h1>  


                :
    
            prod?
            prod.map((item,index) => (
             
              <Link to={`/category/${category}/${item.id}`}  key={index}>
                    <NewProductCard 
                    img1={item.image}
                    img2={item.image}
                    salepercent={15} 
                    brand={item.category}
                    name = {item.title}
                    price={Math.ceil(item.price)}
                    id={item.id}
                    key={item.id} />
                    
              </Link>
            ))
                
            :<h1>...Loading</h1>
    
  }
  

    </div>

  </div>
  </div>
  )
}

export default CategoryPage

