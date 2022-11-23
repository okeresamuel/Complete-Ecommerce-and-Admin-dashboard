import React from 'react'
import { Link } from "react-router-dom"


function signup() {
  return (
    <>
    <div className="login__container">
    <div className="inputs">
    
    <h3 className="Apparel__loginText">Aparel SignUp</h3>
    <label>Username</label>
    <input className="username" placeholder="Username"></input>
    <label>Email</label>
    <input className="password" placeholder="Email"></input>
    <label>Password</label>
    <input className="password" placeholder="Password"></input>
    <button className="Login__btn">SignUp</button>
    <p>If You have an account you can <Link to={"/Aparel/Login"}>Login Here</Link></p>
    </div>
    </div>
    </>
  )
}

export default signup