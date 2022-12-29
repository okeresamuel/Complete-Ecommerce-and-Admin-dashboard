import axios from "../../../helpers/api"
import {useSelector} from "react-redux"


const handleClick = async (item, id) =>{

    try {
     const response = await axios.post("https://aparel-backend.onrender.com/create-checkout-session", {
         item, 
         userId: id
      }) 
      response ? window.location.href = response.data.url : <></>
    } catch (error) {

    }
}


function Checkout({cartItems}) {
 const {user} = useSelector((state)=> state.auth) 
 let  {id} = user

  return (
    <button className='Stripe__btn' onClick={()=>{handleClick(cartItems, id)}}>Checkout via Stripe</button>
  )
}

export default Checkout