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
  const type=useParams().type;
  var baseURL;
  console.log("hey i am in the category page ", category , " and the data is ",type)
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

          if(category=='grocery'){
            setprod(grocery[type]);
          }
          else if(category==='menclothing'){
            setprod(menclothes[type]);
          }
          else if(category==='womenclothing')
          {
           
            setprod(womenclothes[type]);
          }
          else if(category=='electronics')
          {
            console.log("i am here in the electronics section" ,type , " ",electronics[type])
           setprod(electronics[type])
          }
          else if(category==='jewelery')
          {
            setprod(jewelery[type])
          }
          else {
            

             let ans=[];
            
             for(let i=0;i<response.data.length;i++)
             {
              if(response.data[i]['category'] && response.data[i]['category']===type)
              {
                ans.push(response.data[i]);
              }
             }
             setprod(ans);
          }
      });
    }, [refreshPage]);

  return (
    <div className="CatergorypageContainer">

   
    <div className="product-main">

    <h2 className="title">Category : {category}/{type}</h2>
    

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

