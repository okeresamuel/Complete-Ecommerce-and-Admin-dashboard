import { CartContext } from '../../context/CartContext';
import { useContext } from "react";
import BankForm from '../../components/BankForm/BankForm';
import "./cart.css"



const  Cart =  () => {

const globalState = useContext(CartContext)  
console.log(globalState)

    return (
        <div id='checkout'>
            {/* Deraun's Component Goes Here!!! Use the basic styling as shown on the container for it. */}
            {/* <div id='deraun' style={{
                height:"80vh",
                width:"40vw",
                backgroundColor:"red"
            }}>

            </div> */}
            <BankForm />
        </div>
    )
}

export default Cart