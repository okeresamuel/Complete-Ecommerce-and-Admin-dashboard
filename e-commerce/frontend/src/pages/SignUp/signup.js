import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch} from "react-redux"
import {registerUser} from "../../features/Auth/authaction"
import Loader from "../components/Loader/loader"
import { useNavigate } from "react-router-dom"
import {resetAuthState} from "../../features/Auth/authslice.js"
import {toast} from "react-toastify"
import Swal from 'sweetalert2'


function Signup() {
  const  dispatch = useDispatch()
  const  navigate = useNavigate()
  const { user, error, loading, message} =  useSelector((state)=> state.auth)
  
    const formFields = {
        username: "",
        email:"",
        password: ""
      }
     
      // controlled form fields
      const [inputvalue, setinputvalue] = useState(formFields)
      const {username, email, password} = inputvalue;
      const callonchange = (e)=>{
      const {name, value} = e.target;
        setinputvalue({...inputvalue, [name]:value})
      }  
      
    
      function register(){
        if(!username || !email || !password){
          Swal.fire({
            title: 'Error!',
            text: 'Check again some fields may be empty',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
        }else{
          dispatch(registerUser({...inputvalue, password:inputvalue.password.trim()}))

        }
      }    
      

      /* check if user is already registered if the user is, display the error message else 
         navigate to shop page */
      useEffect(()=>{
        if(user){
          navigate("/")
          toast.success(`welcome ${user.username}`)
        }else if(error && message){
          toast.error(message)
          dispatch(resetAuthState())
        }
      },[error, message, dispatch, navigate, user])    

    return (
    <>
    <div className="login__container">
    <div className="inputs">
    
    <h3 className="Apparel__loginText">Aparel SignUp</h3>
    <label>Username</label>
    <input className="username" name="username" value={username} onChange={((e)=>{callonchange(e)})} placeholder="username"></input>
    <label>Email</label>
    <input className="password" name="email" value={email} onChange={((e)=>{callonchange(e)})} placeholder="Email"></input>
    <label>Password</label>
    <input type="password" className="password" name="password" value={password} onChange={((e)=>{callonchange(e)})} placeholder="Password"></input>
    <button className="Login__btn" onClick={(()=>{register()})}>SignUp</button>
    <p>If You have an account you can <Link to={"/Aparel/Login"}>Login Here</Link></p>
    </div>
   </div>
    {loading ? <Loader /> : ""}
    </>
  )
}

export default Signup