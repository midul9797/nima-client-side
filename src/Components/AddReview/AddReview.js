import { Button, Container, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hook/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const [reviewInfo, setReviewInfo] = useState({});
    const [rating, setRating] = React.useState(1);
    
    const currencies = [
        {
          value: 1,
          label: 1,
        },
        {
          value: 2,
          label: 2,
        },
        {
          value: 3,
          label: 3,
        },
        {
          value: 4,
          label: 4,
        },
        {
          value: 5,
          label: 5,
        }
      ];
      const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
        
    }
    const handleReview = e => {
        const review ={
            ...reviewInfo,
            name: user.displayName,
            image: user.photoURL,
            rating: rating
        }
        fetch('https://cryptic-plateau-56093.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
            
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Thanks for the review!!!');
                
            }
        })
        e.preventDefault();
    }
    const handleChange = (event) => {
      setRating(event.target.value);
    };
    return (
        <div>
            <Container sx={{ textAlign: 'center' }}>
                <h1 style={{ color: '#00cba9', m: 5 }}>Place Your Order</h1>
                <form onSubmit={handleReview}>
                    <TextField
                        sx={{ width: '50%', m: 2 }}
                        id="outlined-basic"

                        label="Name"
                        name="name"
                        defaultValue={user.displayName}
                    />

                    <TextField
                        sx={{ display: 'none' }}

                        type="hidden"

                        name="image"
                        defaultValue={user.photoURL}
                    />

                    <TextField
                        sx={{ width: '50%', m: 2 }}
                        id="outlined-multiline-static"
                        onBlur={handleOnBlur}
                        label="Review"
                        multiline
                        name="review"
                        rows={4}

                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={rating}
                        onChange={handleChange}
                        helperText="Please select your currency"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br />
                    <Button type="submit" variant="contained" sx={{ width: '30%', ml: 7, mt: 5, backgroundColor: '#00cba9', fontWeight: 'bold' }}>Submit</Button>
                </form>
            </Container>
        </div>
    );
};

export default AddReview;