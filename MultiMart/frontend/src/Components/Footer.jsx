import React from 'react'
import img1 from "../images/payment.png"
import "./Nav.css"

import { Outlet, Link } from "react-router-dom";
function footer() {
  return (
    <div>
        
  <footer>

<div className="footer-category">

  <div className="container">

    <h2 className="footer-category-title">Brand directory</h2>

    <div className="footer-category-box">

      <h3 className="category-box-title">Fashion :</h3>

      <Link to="/" className="footer-category-link">T-shirt</Link>
      <Link to="/" className="footer-category-link">Shirts</Link>
      <Link to="/" className="footer-category-link">shorts & jeans</Link>
      <Link to="/" className="footer-category-link">jacket</Link>
      <Link to="/" className="footer-category-link">dress & frock</Link>
      <Link to="/" className="footer-category-link">innerwear</Link>
      <Link to="/" className="footer-category-link">hosiery</Link>

    </div>

    <div className="footer-category-box">
      <h3 className="category-box-title">footwear :</h3>
    
      <Link to="/" className="footer-category-link">sport</Link>
      <Link to="/" className="footer-category-link">formal</Link>
      <Link to="/" className="footer-category-link">Boots</Link>
      <Link to="/" className="footer-category-link">casual</Link>
      <Link to="/" className="footer-category-link">cowboy shoes</Link>
      <Link to="/" className="footer-category-link">safety shoes</Link>
      <Link to="/" className="footer-category-link">Party wear shoes</Link>
      <Link to="/" className="footer-category-link">Branded</Link>
      <Link to="/" className="footer-category-link">Firstcopy</Link>
      <Link to="/" className="footer-category-link">Long shoes</Link>
    </div>

    <div className="footer-category-box">
      <h3 className="category-box-title">jewellery :</h3>
    
      <Link to="/" className="footer-category-link">Necklace</Link>
      <Link to="/" className="footer-category-link">Earrings</Link>
      <Link to="/" className="footer-category-link">Couple rings</Link>
      <Link to="/" className="footer-category-link">Pendants</Link>
      <Link to="/" className="footer-category-link">Crystal</Link>
      <Link to="/" className="footer-category-link">Bangles</Link>
      <Link to="/" className="footer-category-link">bracelets</Link>
      <Link to="/" className="footer-category-link">nosepin</Link>
      <Link to="/" className="footer-category-link">chain</Link>
      <Link to="/" className="footer-category-link">Earrings</Link>
      <Link to="/" className="footer-category-link">Couple rings</Link>
    </div>

    <div className="footer-category-box">
      <h3 className="category-box-title">cosmetics :</h3>
    
      <Link to="/" className="footer-category-link">Shampoo</Link>
      <Link to="/" className="footer-category-link">Bodywash</Link>
      <Link to="/" className="footer-category-link">Facewash</Link>
      <Link to="/" className="footer-category-link">makeup kit</Link>
      <Link to="/" className="footer-category-link">liner</Link>
      <Link to="/" className="footer-category-link">lipstick</Link>
      <Link to="/" className="footer-category-link">prefume</Link>
      <Link to="/" className="footer-category-link">Body soap</Link>
      <Link to="/" className="footer-category-link">scrub</Link>
      <Link to="/" className="footer-category-link">hair gel</Link>
      <Link to="/" className="footer-category-link">hair colors</Link>
      <Link to="/" className="footer-category-link">hair dye</Link>
      <Link to="/" className="footer-category-link">sunscreen</Link>
      <Link to="/" className="footer-category-link">skin loson</Link>
      <Link to="/" className="footer-category-link">liner</Link>
      <Link to="/" className="footer-category-link">lipstick</Link>
    </div>

  </div>

</div>

<div className="footer-nav">

  <div className="container">

    <ul className="footer-nav-list">

      <li className="footer-nav-item">
        <h2 className="nav-title">Popular Categories</h2>
      </li>

      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Fashion</Link>
      </li>

      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Electronic</Link>
      </li>

      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Grocery</Link>
      </li>

     
    </ul>

    <ul className="footer-nav-list">
    
      <li className="footer-nav-item">
        <h2 className="nav-title">Products</h2>
      </li>
    
      
    
      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">New products</Link>
      </li>
    
      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Best sales</Link>
      </li>
    
      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Contact us</Link>
      </li>
    
    
    </ul>

    <ul className="footer-nav-list">
    
      <li className="footer-nav-item">
        <h2 className="nav-title">Our Company</h2>
      </li>
    
      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Delivery</Link>
      </li>
    
      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Legal Notice</Link>
      </li>
    
      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Terms and conditions</Link>
      </li>
    
      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">About us</Link>
      </li>
    
      <li className="footer-nav-item">
        <Link to="/" className="footer-nav-link">Secure payment</Link>
      </li>
    
    </ul>


    <ul className="footer-nav-list">

      <li className="footer-nav-item">
        <h2 className="nav-title">Contact</h2>
      </li>

      <li className="footer-nav-item flex">
        <div className="icon-box">
          <ion-icon name="location-outline"></ion-icon>
        </div>

        <address className="content">
          Kanakia Rd, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107
        </address>
      </li>

      <li className="footer-nav-item flex">
        <div className="icon-box">
          <ion-icon name="call-outline"></ion-icon>
        </div>

        <Link to="/" className="footer-nav-link">+919000000007</Link>
      </li>

      <li className="footer-nav-item flex">
        <div className="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
        </div>

        <Link  to="/"  className="footer-nav-link">example@slrtce.in</Link>
      </li>

    </ul>

    <ul className="footer-nav-list">

      <li className="footer-nav-item">
        <h2 className="nav-title">Follow Us</h2>
      </li>

      <li>
        <ul className="social-link">

          <li className="footer-nav-item">
            <Link to="/" className="footer-nav-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>

          <li className="footer-nav-item">
            <Link to="/" className="footer-nav-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>

          <li className="footer-nav-item">
            <Link to="/" className="footer-nav-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </li>

          <li className="footer-nav-item">
            <Link to="/" className="footer-nav-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>

        </ul>
      </li>

    </ul>

  </div>

</div>

<div className="footer-bottom">

  <div className="container">

    <img src={img1} alt="payment method" className="payment-img"/>

    <p className="copyright">
      Copyright &copy; <Link to="/">The One Infotech</Link> all rights reserved.
    </p>

  </div>

</div>

</footer>

    </div>
  )
}

export default footer