import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=> {
        fetch('https://cryptic-plateau-56093.herokuapp.com/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    })
    const handleDelete = id => {
        fetch(`https://cryptic-plateau-56093.herokuapp.com/toys/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            // eslint-disable-next-line no-restricted-globals
            confirm('Are you sure?')
        })
    }
    return (
        <div>
            <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5,color: '#00cba9' }}>Manage All Toys</Typography>
            <Container>
                <Grid container spacing={5}>
                    {
                        toys.map(toy =>             <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'center'}} >
                        <Card>
                            <CardMedia
                                component="img"
                                width="100%"
                                height="300px"
                                image={toy.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {toy.toy_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {toy.description}
                                </Typography>
                                <Typography variant="h4">$ {toy.toy_price}</Typography>
                            </CardContent>
                            <CardActions>
                            <Button onClick={()=> handleDelete(toy._id)} variant="contained" sx={{backgroundColor: 'red', fontWeight: 'bold', ml: 8}}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ManageAllToys;