import React,{useState} from 'react'

import { Link} from "react-router-dom";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");


      const handeleSubmit = async (e) =>{
        e.preventDefault();

        if( newPassword === conformPassword){
            try{
            await fetch("http://localhost:5000/uppassword/" + email,{
                method:"put",
                body: JSON.stringify({ 
                    password:newPassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }

        }).then((res) => res.json())
        .then(
            alert("Password Changed Successfully")
        )
        }
        catch(e){
            console.log(e);
        }

    }
    else{
        alert("Password is incorrect")
    }
      }
  return (
    <div className="loginBody">
      <form onSubmit={handeleSubmit}>
        <div className="MainContainer">
        <img src="sdmplogo1.png" alt="..." style={{height:"100px", width:"100px"}}/>
            <h2 className="WelcomeText" style={{color:"white", fontSize:"20px"}}> Change User Password</h2>
           
            <div className="InputContainer">
                <input type="email" className="inputs" placeholder="Email" onChange={e => setEmail(e.target.value)} required/>  
                <input type="text" className="inputs" placeholder="New Password" onChange={e => setNewPassword(e.target.value)} required/>
                <input type="password" className="inputs" placeholder="Conform Password" onChange={e => setConformPassword(e.target.value)} required/>
            </div>
            <div className="ButtonContainer">
                
                <button className="buttons"><Link to="/"><h3 style={{color:"white", fontSize:"15px"}}>Login</h3></Link></button>
                <button className="loginbuttons" type="submit"><h3 style={{color:"white", fontSize:"15px"}}>Change Password</h3></button>
            </div>         
        </div>
      </form>
    </div>
  )
}
