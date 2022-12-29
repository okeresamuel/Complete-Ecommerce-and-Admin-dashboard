import BankForm from '../../components/BankForm/BankForm';
import "./Cart.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import Checkoutbtn from "./stripecheckout/checkout"
import {removeFromcart, IncrementItem, DecrementItem, ClearCart} from "../../features/cart/cartslice"

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Cart = () => {
const subtotal = (prices) => {  
        let sum = 0
        prices?.forEach(element => sum += element.price * element.qty);
        return "$" + sum
};


const {user} = useSelector((state)=> state.auth)
const {cart} = useSelector((state)=> state.cart)
const dispatch = useDispatch()

    return (
        <div id="checkout">
            <section className='cart_section'>
            <h4>Welcome To your cart {user?.username}</h4>

             {cart?.length <= 0 ? (
                /* if the cart items exist then map through 
                else we redirect the back to the home page to start shopping */
                 <p>No Cart Items Found ? 🤔  <Link to='/'>Start Shoping here!!!</Link></p>
              ) : (
                <div>{cart?.map((item) => (
                    <>
                      <Paper
                            sx={{
                                p: 2,
                                margin: 'auto',
                                maxWidth: 500,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                            style={{maginTop: "5px"}}
                        >
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase sx={{ width: 128, height: 128 }}>
                                        <Img alt="complex" src={item.image} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
    
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                               <h4>{item.desc}</h4> 
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Product ID: {item._id}
                                            </Typography>
                                            <Typography>
                                                Amount Selected  <button onClick={(()=>{ item.qty === 1 ? <></> : dispatch(DecrementItem(item))})}>-</button> {item.qty} <button onClick={(()=>{dispatch(IncrementItem(item))})}>+</button>
                                        </Typography>
                                       </Grid>
                                      <Grid item>
                                     </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" component="div">
                                            {"$" + item.price * item.qty} 
                                        </Typography>
                                        <Typography component="div" onClick={(()=>{dispatch(removeFromcart(item))})}>
                                           X
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                     </>
                 ))}
                </div>
             )}
            <h2> Payments Subtotal: <span className='Money'>{subtotal(cart)}</span></h2>
            <button className="clear__cart" onClick={()=>{dispatch(ClearCart())}}>Clear Cart</button>
           <Checkoutbtn  cartItems={cart} />
           </section>
           <section className='bankform_section'>
           <BankForm /> 
           </section>
        </div>
    )
}
export default Cart 