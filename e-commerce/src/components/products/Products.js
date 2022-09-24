
import { Card, CardMedia, CardContent, Typography, Grid,} from "@mui/material";
import { Card, CardMedia, CardContent, Typography, CardActions, Grid, FormRow, Box, Button } from "@mui/material";
import { margin } from "@mui/system";
import { items } from "../../data/items";
import "./products.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Products = () => {

    return (
        <>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={{ xs: 1, md: 1 }}>

                {items.map((item) => (
                    


                    <Grid item xs={3} sm={3} md={2.8} key={item.id} >
                        <Card sx={{ maxWidth: 250 }} >
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
                                    Price: 100
                                </Typography>
                                <div className="Shopping_Button">
                                <ShoppingCartIcon />
                                </div>
                            </CardContent>
                        </Card>
                        <div className="Favorite_Icon">
                            <FavoriteIcon />
                        </div>
                    </Grid>


                ))}

            </Grid>
        </>
    )

}

export default Products;
