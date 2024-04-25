import './App.css';

import React, { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Product from './Components/Product';
import Checkout from './Components/Checkout';
import Nav from './Components/Nav';
import CategoryPage from './Components/CategoryPage';
import NewProduct from './Components/NewProduct';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Subcategory from './Components/Subcategory'
function App() {
  const [openCart,setopenCart] =useState(false);
  const [refreshPage,setRefreshPage]=useState(0);

  return (
  
    <BrowserRouter>
    
         
       <Routes>
                 <Route  path='/' element={<><Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} />< Home /></>}></Route>  
                 <Route  path='/about' element={<><Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} />< About /></>}></Route>  
                 <Route  path='/contact' element={<><Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} />< Contact /></>}></Route>  
                 <Route  path='/product/:brand/:id' element={<><Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} />< Product setopenCart={setopenCart} /></>}></Route> 
                 <Route  path='/checkout' element={<><Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} /><Checkout/></>}></Route>   
                 <Route  path='/category/:category' element={<><Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} /><CategoryPage refreshPage={refreshPage} /></>}></Route> 
                 <Route  path='/list/:category/:type' element={<><Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} /><Subcategory refreshPage={refreshPage} /></>}></Route>
                 <Route  path="/category/:category/:id" element={<><Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} /><NewProduct setopenCart={setopenCart}  /></>}> </Route>
                 <Route path="/login" element={<Login/>} ></Route>
                 <Route path="/signup" element={<SignUp/>} ></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
