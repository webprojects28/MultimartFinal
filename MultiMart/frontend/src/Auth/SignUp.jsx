import React from "react";
import { useNavigate } from "react-router-dom";

import user_icon from '../images/logo/person.png'
import email_icon from '../images/logo/email.png'
import password_icon from '../images/logo/password.png'
import axios from "axios";
import { useState } from "react";
function SignUp() {
 
  const navigate = useNavigate();
  function submitHandler() {
    axios({
      url: "http://localhost:8000/",
      method: "POST",
      data: { username: username, email: email, password: password },
    })
      .then((res) => {
        if (res.data.username) {
          alert("Success");
          navigate(`/login`);
        } else {
          if (res.data.message.keyPattern.username)
            alert("Select Different Username");
          else alert("Select Different Email");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("There is some problem in API REQUEST OR BACKEND");
      });
  }
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  return (
    <div className="login-conContainer">
      <div className="login-container">
        <div className="login-header">
          <div className="login-text">Sign Up</div>
          <div className="login-underline"></div>
        </div>
        <div className="login-inputs">
          <div className="login-input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Username" onChange={(e) => setusername(e.target.value)}/>
          </div>
         
          <div className="login-input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" onChange={(e) => setemail(e.target.value)}/>
          </div>
        
          <div className="login-input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"  onChange={(e) => setpassword(e.target.value)}/>
          </div>
        </div>
        
        <div className="login-submit-container">
        <div className='login-submit login-gray' onClick={()=>{navigate('/login')}} >Login</div>
        <div className='login-submit' onClick={()=>submitHandler()}>Sign Up</div>
      
        </div>
      </div>
      </div>

    // </div>
    
  );
}



export default SignUp;