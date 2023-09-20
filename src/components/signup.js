import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDOB] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const register = async (e) => {
        let result = await fetch(
            'http://localhost:5000/register', {
                method: "post",
                body: JSON.stringify({ 
                    fname,
                    lname,
                    dob,
                    fatherName,
                    address,
                    phoneNumber:number,
                    email,
                    password
                 }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await result.json();
            window.alert("Registered Successfully")
          
    }
    
  return (
    <div className="loginBody">
    <form onSubmit={register}>
    <div className="MainContainers">
    <img src="sdmplogo1.png" alt="..." style={{height:"100px", width:"100px"}}/>
            <h2 className="WelcomeText" style={{color:"white", fontSize:"25px"}}> Register your account to login</h2>
            <hr className='HorizontalRule'/>
            <div className="InputContainer">
                <input type="text" className="inputsin" placeholder="First Name" onChange={e => setFname(e.target.value)} required/>
                <input type="text" className="inputsin" placeholder="Last Name" onChange={e => setLname(e.target.value)} />
                <input type="date" className="inputsin" placeholder="Date OF Brith" onChange={e => setDOB(e.target.value)}  required/>
                <input type="text" className="inputsin" placeholder="Father Name" onChange={e => setFatherName(e.target.value)}  required/>
                <input type="text" className="inputsin" placeholder="Address" onChange={e => setAddress(e.target.value)}  required/>
                <input type="number" className="inputsin" placeholder="Phone Number" onChange={e => setNumber(e.target.value)}  required/>
                <input type="email" className="inputsin" placeholder="Email" onChange={e => setEmail(e.target.value)}  required/>
                <input type="password" className="inputsin" placeholder="Password" onChange={e => setPassword(e.target.value)}  required/>
            </div>
            <div className="ButtonContainers">
                <button className="loginbuttons"><Link to="/"><h3 style={{color:"white"}}>LOGIN</h3></Link></button>
                <button className="buttons" type="submit"><h3 style={{color:"white"}}>Register </h3></button>
            </div>
    </div>
    </form>
    </div>
  )
}
