import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
const AddToy = () => {
    const [toyInfo, setToyInfo] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...toyInfo };
        newInfo[field] = value;
        setToyInfo(newInfo);
    }
    const handleAddToy = e => {
        fetch('https://cryptic-plateau-56093.herokuapp.com/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
            
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Toy Added Successfully');
                
            }
        })
        e.preventDefault();
    }
    return (
        <Container sx={{textAlign: 'center'}}>
            <h1 style={{color: '#00cba9', m: 5}}>Add a Toy</h1>
            <form onSubmit={handleAddToy}>
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    id="outlined-basic"
                    onBlur={handleOnBlur}
                    label="Toy Name"
                    name="toy_name"
                />
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    id="outlined-basic"
                    onBlur={handleOnBlur}
                    label="Price"
                    name="toy_price"

                />
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    id="outlined-basic"
                    onBlur={handleOnBlur}
                    label="Image URL"
                    name="image"

                />
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    onBlur={handleOnBlur}
                    name="description"
                    rows={4}

                />

                <br />
                <Button type="submit" variant="contained" sx={{ width: '30%', ml: 7, mt: 5, backgroundColor: '#00cba9', fontWeight: 'bold' }}>Submit</Button>
            </form>
        </Container>
    );
};

export default AddToy;