import React, {  useState } from "react";
import "./LoginPage.css";
import axios from 'axios'

const LoginPage = ({setLoggedIn}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }

    const loginUser = async()=>{
        try{
            const url = "https://api.escuelajs.co/api/v1/auth/login";

            const response = await axios.post(url,{
                email,
                password,
            });

            localStorage.setItem("token",response.data.access_token)
            setLoggedIn(true);

        }catch(error){
            console.log("login failed",error);
            alert("invalid credentials");
        }

    }

  return (
    <div className="login-container">
      <div className="credentials-container">
        <h1 className="heading">Login</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="enter username"
            id="user-id"
            className="input"
            onChange={handleEmail}
          />

          <input
            type="password"
            placeholder="enter password"
            id="password"
            className="input"
            onChange={handlePassword}
          />
        </div>
        <div className="button-container">
          <button className="button btn" onClick={loginUser}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
