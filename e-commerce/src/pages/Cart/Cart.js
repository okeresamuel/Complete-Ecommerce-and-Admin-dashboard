import { CartContext } from '../../context/CartContext';
import { useContext } from "react";



const  Cart =  () => {

const globalState = useContext(CartContext)  
console.log(globalState)

    return (
        <div>
            Cart
        </div>
    )
}

export default Cart