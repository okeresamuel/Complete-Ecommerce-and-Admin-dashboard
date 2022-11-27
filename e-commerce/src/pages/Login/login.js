import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {loginUser} from "../../features/Auth/authaction"
import Loader from "../components/Loader/loader"
import ErrorSweetalert from "../components/sweetalert/sweetalert"
import {resetAuthState} from "../../features/Auth/authslice"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

function Login() {   

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, error,loading, message} = useSelector((state)=> state.auth)

    const formFields = {
      username: "",
      password: ""
    }
   
    //controlled form fields
    const [inputvalue, setinputvalue] = useState(formFields)
    const {username, password} = inputvalue;
    const callonchange = (e)=>{
    const {name, value} = e.target;
      setinputvalue({...inputvalue, [name]:value})
    }
    
    //dispatch login user
    function login(){
      if(!username || !password){
       ErrorSweetalert()
      }else{
        dispatch(loginUser(inputvalue))
      }
    }    
    
  
    useEffect(()=>{
    if(user){
      navigate("/")
      toast.success(`welcome back ${user.username}`)
    }
    if(error && message){
      toast.error(`${message} login pls check the username or password`)
      dispatch(resetAuthState())
    }
    },[user, message, error])

  return(
    <>
    <div className="login__container">
    <div className="inputs">
    <h3 className="Apparel__loginText">Aparel Login</h3>
    <label>Email</label>
    <input className="username" name="username" value={username} onChange={((e)=>{callonchange(e)})} placeholder="Email ID"></input>
    <label>Password</label>
    <input className="password" name="password" value={password} onChange={((e)=>{callonchange(e)})} placeholder="Password"></input>
    <button className="Login__btn" onClick={(()=>{login()})}>Login</button>
    <p>If You don`t have an account you can <Link to={"/Aparel/Signup"}>SignUp Here</Link></p>
    </div>
    </div>
    {loading ? <Loader /> : ""}
    </>
  )
}

export default Login