import {logoutUser} from "../../features/Auth/authaction"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {resetAuthState } from "../../features/Auth/authslice"
import "../Userprofile/userprofile.css"


function Userprofile() {

//logout the user.  
const dispatch = useDispatch()
const navigate = useNavigate()
const {user} = useSelector((state)=> state.auth)
function logout(){
 dispatch(logoutUser())
 dispatch(resetAuthState())
 navigate("/Aparel/login")
}

return (
    <div>
    {user ? <button className='Logout__btn' onClick={(()=>{logout()})}>Logout</button> : <></>}
    </div>
  )
}

export default Userprofile