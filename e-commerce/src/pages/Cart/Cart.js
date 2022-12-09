import { CartContext } from '../../context/CartContext';
import { useContext } from "react";
import BankForm from '../../components/BankForm/BankForm';
import "./cart.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const subtotal = (prices) => {
    let sum = 0
    prices.forEach(element => {
        sum += element.price
    });
    return "$" + sum
};


const Cart = () => {

    const globalState = useContext(CartContext)
    return (
        <div id="checkout">
            <div >{"My Cart"}</div>
            <div>{globalState.state?.map((item) => (
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
                                            Product ID: {item.id}
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
            ))}</div>

            <div>Subtotal:
                {
                    subtotal(globalState.state)
                }
            </div>
            <br />
            <br />
            <div>Payment Details:</div>
            <BankForm /> 
        </div>
    )
}

export default Cart