import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Toy from '../Toy/Toy'
const Toys = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:4000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    })

    
    return (
        <div>
            <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5, color: '#00cba9' }}>Toys</Typography>
            <Container>
                <Grid container spacing={5}>
                    {
                        toys.slice(0,8).map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Toys;