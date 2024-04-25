import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'
import user_icon from '../images/logo/person.png'
import email_icon from '../images/logo/email.png'
import password_icon from '../images/logo/password.png'
function Login() {
  const navigate = useNavigate();

  function submitHandler() {
    axios.post("http://localhost:8000/authenticate", {
        username: username,
        password: password
      }, {
        withCredentials: true // Ensure cookies are sent with the request
      })
      .then((res) => {
        console.log(res.data.message);
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err);
        alert("User does not Exists");
      });
  }
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="login-conContainer">
      <div className="login-container">
        <div className="login-header">
          <div className="login-text">Login</div>
          <div className="login-underline"></div>
        </div>
        <div className="login-inputs">
          <div className="login-input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" onChange={(e) => setusername(e.target.value)}/>
          </div>
          
          <div className="login-input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"  onChange={(e) => setpassword(e.target.value)}/>
          </div>
        </div>
       
        <div className="login-forgot-password" onClick={()=>{navigate('/forgotpassword')}}>Forgot Password ? <span>Click here!</span></div>
        <div className="login-submit-container">
         
          <div className='login-submit login-gray' onClick={()=>{navigate('/signup')}} >SignUp</div>
          <div className='login-submit' onClick={()=>submitHandler()}>Login</div>
        </div>
      </div>
      </div>

      
  );
}

export default Login;