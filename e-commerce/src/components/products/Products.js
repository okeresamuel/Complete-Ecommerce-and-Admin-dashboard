
import { Card, CardMedia, CardContent, Typography, CardActions, Grid, FormRow, Box, Button } from "@mui/material";
import { margin } from "@mui/system";
import { items } from "../../data/items";
import "./products.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const Products = () => {
    return (
        <div className="Products__display">
            <Grid container xs={12} columnSpacing={{ xs: 5, md: 2 }}>
                {items.map((item) => (
                    <Grid item xs={3.5} key={item.id} columnSpacing={1} >
                        <Card sx={{ maxWidth: 350 }} >
                            {item.tag &&
                                <div className="Promo_Iconz">
                                    <Button style={{ backgroundColor: 'hsl(250deg 57% 97%)', opacity: '85%', color: 'blue' }}>{item.tag}</Button>
                                </div>}
                            <CardMedia
                                component="img"
                                height="350"
                                image={item.image}
                                alt="shirt" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {`Price: $${item.price}`}
                                </Typography>
                                <div className="Shopping_Button">
                                    <ShoppingCartIcon />
                                </div>
                            </CardContent>
                        </Card>
                        <div className="Favorite_Icon">
                            <FavoriteBorderIcon className='love__icon' />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )

}
export default Products;
