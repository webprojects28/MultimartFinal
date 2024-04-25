import React from 'react'
import "./Nav.css"
import img1 from "../images/electronics-banner-1.jpg";
import img2 from "../images/mens-banner.jpg";
import img3 from "../images/womens-banner.jpg";
import img4 from "../images/electronics-banner-2.jpg"
import { Outlet, Link } from "react-router-dom";
import { useState ,useEffect } from 'react';
import Cart from './Cart';
import axios from 'axios';
function Nav({setopenCart,openCart,setRefreshPage,refreshPage}) {


  useEffect(() => {
    axios.get("http://localhost:8000/product").then((response) => {
      setprodlen(response.data.length);
  });
  }, []);
  
  const [prodlen,setprodlen]=useState(0);
  return (
    <div>
        
        <div className="header-main">

<div className="container">

  <Link className="flex" to="/" onClick={()=>setRefreshPage()}><h1>Multimart</h1></Link>

  <div className="header-search-container">

    <input 
    type="search" 
    name="search" 
    className="search-field" 
    placeholder="Enter your product name..."
    />

    <button className="search-btn">
      <ion-icon name="search-outline"></ion-icon>
    </button>

  </div>

  <div className="header-user-actions">

    <button className="action-btn">
      <ion-icon name="person-outline"></ion-icon>
    </button>
    



    <button className="action-btn" onClick={()=>setopenCart(!openCart)}>
      <ion-icon name="bag-handle-outline"></ion-icon>
      <span className="count">{prodlen}</span>
    </button>
    

  </div>

</div>

</div>
<nav className="desktop-navigation-menu">

<div className="container">

  <ul className="desktop-menu-category-list">

    <li className="menu-category">
      <Link className="menu-title" to="/">Home</Link>
    </li>

    <li className="menu-category">
      <Link className="menu-title" to="/">Categories</Link>

      <div className="dropdown-panel">

        <ul className="dropdown-panel-list">

          <li className="menu-title">
           
            <Link to="/category/electronics" onClick={()=>setRefreshPage(refreshPage+1)}>Electronics</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/electronics/smarttv" onClick={()=>setRefreshPage(refreshPage+1)}>Desktop</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/electronics/laptop" onClick={()=>setRefreshPage(refreshPage+1)}>Laptop</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/electronics/smartwatch" onClick={()=>setRefreshPage(refreshPage+1)}>Smart Watch</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/electronics/tablet" onClick={()=>setRefreshPage(refreshPage+1)}>Tablet</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/electronics/headphone" onClick={()=>setRefreshPage(refreshPage+1)}>Headphone</Link>
          </li>

          <li className="panel-list-item">
             <Link to="/category/electronics" onClick={()=>setRefreshPage(refreshPage+1)}>
              <img src={img1} alt="headphone collection" width="250"
                height="119"/>
            </Link>
          </li>

        </ul>

        <ul className="dropdown-panel-list">

          <li className="menu-title">
            <Link to="/category/grocery" onClick={()=>setRefreshPage(refreshPage+1)}>Grocery</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/grocery/spices" onClick={()=>setRefreshPage(refreshPage+1)}>Spices</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/grocery/vegetable" onClick={()=>setRefreshPage(refreshPage+1)}>Vegetables</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/grocery/fruits" onClick={()=>setRefreshPage(refreshPage+1)}>Fruits</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/grocery/pulses"onClick={()=>setRefreshPage(refreshPage+1)}>Pulses</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/grocery/wheat"onClick={()=>setRefreshPage(refreshPage+1)}>Wheat/Rice</Link>
          </li>

          <li className="panel-list-item" >
            <Link to="/category/grocery" onClick={()=>setRefreshPage(refreshPage+1)}>
              <img src={img2} alt="men's fashion" width="250" height="119"/>
            </Link>
          </li>

        </ul>

        <ul className="dropdown-panel-list">

          <li className="menu-title">
            <Link  to="/category/menclothing" onClick={()=>setRefreshPage(refreshPage+1)}> Men's Fashion</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/menclothing/formal" onClick={()=>setRefreshPage(refreshPage+1)}>Formal</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/menclothing/casual" onClick={()=>setRefreshPage(refreshPage+1)}>Casual</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/menclothing/jeans" onClick={()=>setRefreshPage(refreshPage+1)}>Jeans</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/menclothing/hoodies" onClick={()=>setRefreshPage(refreshPage+1)}>Hoddies</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/menclothing/shoes" onClick={()=>setRefreshPage(refreshPage+1)}>Shoes</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/category/menclothing" onClick={()=>setRefreshPage(refreshPage+1)}>
              <img src={img3} alt="women's fashion" width="250" height="119"/>
            </Link>
          </li>

        </ul>

        <ul className="dropdown-panel-list">

          <li className="menu-title">
            <Link  to="/category/womenclothing" onClick={()=>setRefreshPage(refreshPage+1)}> Women's Fashion</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/womenclothing/formal" onClick={()=>setRefreshPage(refreshPage+1)}>Formal</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/womenclothing/casual" onClick={()=>setRefreshPage(refreshPage+1)}>Casual</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/womenclothing/jeans" onClick={()=>setRefreshPage(refreshPage+1)}>Jeans</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/womenclothing/hoodies" onClick={()=>setRefreshPage(refreshPage+1)}>Hoddies</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/list/womenclothing/shoes" onClick={()=>setRefreshPage(refreshPage+1)}>Shoes</Link>
          </li>

          <li className="panel-list-item">
            <Link to="/category/womenclothing" onClick={()=>setRefreshPage(refreshPage+1)}>
              <img src={img3} alt="women's fashion" width="250" height="119"/>
            </Link>
          </li>

        </ul>
        

      </div>
    </li>











    <li className="menu-category">
      <Link to="/category/grocery" className="menu-title" onClick={()=>setRefreshPage(refreshPage+1)}>Grocery</Link>

      <ul className="dropdown-list">

        <li className="dropdown-item">
          <Link to="/list/grocery/vegetable" onClick={()=>setRefreshPage(refreshPage+1)}>Vegetables</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/list/grocery/fruits" onClick={()=>setRefreshPage(refreshPage+1)}>Fruits</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/list/grocery/pulses" onClick={()=>setRefreshPage(refreshPage+1)}>Pulses</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/list/grocery/wheat" onClick={()=>setRefreshPage(refreshPage+1)}>Grains</Link>
        </li>

      </ul>
    </li>





    <li className="menu-category">
    <Link to="/category/electronics" className="menu-title" onClick={()=>setRefreshPage(refreshPage+1)}>Electronics</Link>

      <ul className="dropdown-list">

        <li className="dropdown-item">
          <Link to="/list/electronics/smartwatch" onClick={()=>setRefreshPage(refreshPage+1)}>Smart Watch</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/list/electronics/smarttv" onClick={()=>setRefreshPage(refreshPage+1)}>Smart TV</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/list/electronics/tablet" onClick={()=>setRefreshPage(refreshPage+1)}>Tablets</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/list/electronics/headphone" onClick={()=>setRefreshPage(refreshPage+1)}>Headphones</Link>
        </li>

      </ul>
    </li>

    <li className="menu-category">
    <Link to="/category/jewelery" className="menu-title" onClick={()=>setRefreshPage(refreshPage+1)}>Jewelery</Link>

      <ul className="dropdown-list">

        <li className="dropdown-item">
          <Link to="/list/jewelery/necklace" onClick={()=>setRefreshPage(refreshPage+1)}>Necklace</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/list/jewelery/ring" onClick={()=>setRefreshPage(refreshPage+1)}>Ring</Link>
        </li>
      </ul>
    </li>





    <li className="menu-category">
    <Link to="/category/beautyproducts" className="menu-title" onClick={()=>setRefreshPage(refreshPage+1)}>Beauty Products</Link>

      <ul className="dropdown-list">

        <li className="dropdown-item">
          <Link to="/list/beautyproducts/powder" onClick={()=>setRefreshPage(refreshPage+1)}>Powder</Link>
        </li>

        <li className="dropdown-item">
          <Link to="/list/beautyproducts/cream" onClick={()=>setRefreshPage(refreshPage+1)}>Cream</Link>
        </li>


        <li className="dropdown-item">
          <Link to="/list/beautyproducts/mineral" onClick={()=>setRefreshPage(refreshPage+1)}>Mineral</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/list/beautyproducts/liquid" onClick={()=>setRefreshPage(refreshPage+1)}>Liquid</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/list/beautyproducts/palette" onClick={()=>setRefreshPage(refreshPage+1)}>Palette</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/list/beautyproducts/pencil" onClick={()=>setRefreshPage(refreshPage+1)}>Pencil</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/list/beautyproducts/lipstick" onClick={()=>setRefreshPage(refreshPage+1)}>Lipstick</Link>
        </li>
      </ul>
    </li>

   
  </ul>

</div>

</nav>

{openCart && <Cart openCart={openCart} setprodlen={setprodlen}  setopenCart={setopenCart}/>}
        
    </div>
  )
}

export default Nav