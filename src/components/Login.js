import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [dataEmail, setDataEmail] = useState("");
  const [dataPassword, setDataPassword] = useState("");

  const hestory = useNavigate();

  useEffect(() =>{
    try{
      fetch("http://localhost:5000/user/" + email, { method: "get" })
        .then((res) => res.json())
        .then((da) => {
          setDataEmail(da.email);
          setDataPassword(da.password);
        });
      }catch(e){
        console.log(e);
    };
  })

  const handelevent = () => {    

  if(email === dataEmail && password === dataPassword){
    hestory("./Home")
  }
  else{
    window.alert("invalied email or password")
  }
  };


  return (
    <div className="loginBody">
      <form onSubmit={handelevent}>
        <div className="MainContainer">
        <img src="sdmplogo1.png" alt="..." style={{height:"100px", width:"100px"}}/>
            <h2 className="WelcomeText" style={{color:"white", fontSize:"25px"}}> Welcome </h2>
           
            <div className="InputContainer">
                <input type="email" className="inputs" placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
                <input type="password" className="inputs" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
            </div>
            <div className="ButtonContainer">
                <button className="buttons" type="submit"><h3 style={{color:"white", fontSize:"20px"}}>LOGIN</h3></button>
            </div>
            <div className="ButtonContainer">
                <button className="buttons"><Link to="./signup.js"><h3 style={{color:"white" , fontSize:"20px"}}>SIGNUP</h3></Link></button>
            </div>
            <Link to="/ForgetPassword"><h4 className="ForgotPassword" style={{color:"white", fontSize:"15px"}}>Forgot Password</h4></Link>         
        </div>
      </form>
    </div>
  );
}
