import { CartContext } from '../../context/CartContext';
import { useContext, useEffect, useState} from "react";
import BankForm from '../../components/BankForm/BankForm';
import "./cart.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Cart = () => {
    const subtotal = (prices) => {  
        let sum = 0
        prices?.forEach(element => sum += element.price);
        return "$" + sum
};


const cartState = useContext(CartContext)
const {user} = useSelector((state)=> state.auth)

    return (
        <div id="checkout">
            <section className='cart_section'>
            <h4>Welcome To your cart {user?.username}</h4>

             {cartState.state.length <= 0 ? (
                /* if the cart items exist then map through 
                else we redirect the back to the home page to start shopping */
                 <p>No Cart Items Found ? 🤔  <Link to='/'>Start Shoping here!!!</Link></p>
              ) : (
                <div>{cartState.state.map((item) => (
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
                                                Product ID: {item.id}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Amount Selected  <button>-</button> {item.qty} <button>+</button>
                                        </Typography>
                                       </Grid>
                                      <Grid item>
                                     </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" component="div">
                                            {"$" + item.price} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                     </>
                 ))}
                </div>
             )}

            <h2> Payments Subtotal: <span className='Money'>{subtotal(cartState.state)}</span></h2>
           </section>
           <section className='bankform_section'>
           <BankForm /> 
           </section>
        </div>
    )
}

export default Cart