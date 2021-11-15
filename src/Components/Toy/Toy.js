import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { toy_name, toy_price, description, image, _id } = toy;
    return (
        
            <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'center'}} >
                <Card>
                    <CardMedia
                        component="img"
                        width="100%"
                        height="300px"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {toy_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{height: '180px'}}>
                            {description}
                        </Typography>
                        <Typography variant="h4">$ {toy_price}</Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/purchase/${_id}`}><Button variant="contained" sx={{ml: '50%', backgroundColor: '#00cba9', fontWeight: 'bold'}}>Purchase</Button></Link>
                    </CardActions>
                </Card>
            </Grid>
        
    );
};

export default Toy;