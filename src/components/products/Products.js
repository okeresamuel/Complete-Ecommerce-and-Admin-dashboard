import { Card, CardMedia, CardContent, Typography, CardActions, Grid, FormRow, Box } from "@mui/material";
import { margin } from "@mui/system";
import { items } from "../../data/items";
import "./products.css"



// {
//     <Box sx={{ flexGrow: 1 }}>
//     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>


//         {Array.from(Array(6)).map((_, index) => (
//             <Grid item xs={2} sm={4} md={4} key={index}>
//                 <Item>xs=2</Item>
//             </Grid>
//         ))}
//     </Grid>
// </Box>

// }



const Products = () => {

    return (
        <>
            {/* <Box sx={{ flexGrow: 1 }}> */}
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}  columnSpacing={{xs: 1, md: 1 }}>

                    {items.map((item) => (

                        // <div id="products">
                            <Grid item xs={3} sm={3} md={2.8}  key={item.id} >
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
                            </Grid>
                        // </div>

                    ))}

                </Grid>
            {/* </Box> */}
        </>
    )

}

export default Products;