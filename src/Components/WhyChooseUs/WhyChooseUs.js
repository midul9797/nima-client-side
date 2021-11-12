import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import toy1 from '../../images/1.png';
import toy2 from '../../images/2.png';
import toy3 from '../../images/3.png';
const WhyChooseUs = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', m: 10 }}>Why <span style={{color: "#00cba9"}}>Choose Us</span></Typography>
            <Grid container spacing={5} sx={{textAlign: "center"}}>
                <Grid item xs={12} md={4}>
                    <img src={toy3}alt="toy1" style={{width: '200px', height: '200px'}}/>
                    <Typography variant="h4" sx={{mt: 5, mb:3, color: '#00cba9', fontWeight: 'bold'}}>Free Shipping</Typography>
                    <Typography variant="h6">Don’t worry! The orders always arrive on time.</Typography>
                    
                    <p></p>
                </Grid>
                <Grid item xs={12} md={4} >
                <img src={toy1} alt="toy2" style={{width: '200px', height: '200px'}} >
                    </img>
                    <Typography variant="h4" sx={{mt: 5,mb: 3, color: '#00cba9', fontWeight: 'bold'}}>Free Returns</Typography>
                    <Typography variant="h6">All returns are subject to verification of original sale.</Typography>
                
                </Grid>
                <Grid item xs={12} md={4}>
                <img src={toy2} alt="toy3" style={{width: '200px', height: '200px'}}>
                    </img>
                    <Typography variant="h4" sx={{mt: 5, mb: 3, color: '#00cba9', fontWeight: 'bold'}}>Gift Cards</Typography>
                    <Typography variant="h6">The perfect gift for everyone, it is a gift card.</Typography>
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyChooseUs;