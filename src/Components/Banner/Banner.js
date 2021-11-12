import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import bannerBg from '../../images/banner_bg.png'
const Banner = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#00cba9',  marginTop: '-80px' }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{mt: 15, ml: 10}}>
                        <Typography variant="h2" sx={{color: 'white', fontWeight: 'bold'}}>Pick the best toy <br/> for your kid</Typography>
                        <Typography variant="body1" sx={{color: 'white'}}>Active toys for smart and active kids. Bring fun and non-stop learning for your little ones.</Typography>
                        <Button variant="contained" sx={{fontWeight:'bold', backgroundColor:'darkcyan', mt: 5, py:1, px: 2}}>Learn More</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={bannerBg} alt="" style={{ width: '60%', marginLeft: '20%', marginTop:'10px' }} />
                    </Grid>
                </Grid>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,106.7C672,107,768,149,864,181.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    );
};

export default Banner;