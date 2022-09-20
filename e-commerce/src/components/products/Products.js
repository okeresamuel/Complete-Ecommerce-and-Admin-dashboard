import { Card, CardMedia, CardContent, Typography, Grid,} from "@mui/material";
import { items } from "../../data/items";
import "./products.css"
import FavoriteIcon from '@mui/icons-material/Favorite';



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