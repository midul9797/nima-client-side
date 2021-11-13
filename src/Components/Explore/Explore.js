import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

const Explore = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=> {
        fetch('https://cryptic-plateau-56093.herokuapp.com/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    })
    return (
        <div>
            <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}>Explore <span style={{color: '#00cba9'}}>Our Toys</span></Typography>
            <Container>
                <Grid container spacing={5}>
                    {
                        toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Explore;