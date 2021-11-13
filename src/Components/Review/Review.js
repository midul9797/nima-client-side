import React, { useEffect, useState } from 'react';
import { Avatar, Card, CardContent,  Container, Grid, Rating, Typography } from '@mui/material';
const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:4000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    })
    return (
        <div>
            <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', m: 10 }}>Happy <span style={{color: "#00cba9"}}>Customers</span></Typography>
            <Container>
                <Grid container spacing={5}>
                    {
                        reviews.map(review => <Grid item xs={12} md={4} sx={{ textAlign: 'center' }} >
                            <Card>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={review.image}
                                    sx={{ width: 200, height: 200, ml:10 }}
                                    
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {review.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {review.review}
                                    </Typography>
                                    <Rating name="read-only" value={review.rating} readOnly />
                                </CardContent>
                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Review;