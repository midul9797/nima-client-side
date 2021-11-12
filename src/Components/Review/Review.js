import React from 'react';
import { Avatar, Card, CardContent,  Container, Grid, Rating, Typography } from '@mui/material';
const Review = () => {
    const reviews = [{
        "name": "Midul",
        "image": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "review": "Great",
        "rating": 3
    },
    {
        "name": "Midul",
        "image": "https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
        "review": "Great",
        "rating": 3
    },{
        "name": "Midul",
        "image": "https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
        "review": "Great",
        "rating": 3
    },{
        "name": "Midul",
        "image": "https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
        "review": "Great",
        "rating": 3
    }]
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