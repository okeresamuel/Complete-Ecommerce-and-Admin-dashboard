import { Link } from "react-router-dom"


function login() {
  return (
    <>
    <div className="login__container">
    <div className="inputs">
    
    <h3 className="Apparel__loginText">Aparel Login</h3>
    <label>Email</label>
    <input className="username" placeholder="Email ID"></input>
    <label>Password</label>
    <input className="password" placeholder="Password"></input>
    <button className="Login__btn">Login</button>
    <p>If You don`t have an account you can <Link to={"/Aparel/Signup"}>SignUp Here</Link></p>
   
    </div>
    </div>
    </>
  )
}

export default login