import { Button, Container, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const Purchase = () => {
    const { id } = useParams();
    const { user, status, setStatus } = useAuth();
    const [toys, setToys] = useState([]);
    useEffect(()=> {
        fetch('https://cryptic-plateau-56093.herokuapp.com/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    })
    const [orderInfo, setOrderInfo] = useState({})
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const currentStatus = 'pending';
        
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
        setStatus(currentStatus)
    }
    const handleOrder = e => {
        const order ={
            ...orderInfo,
            status: status,
            customer_name: user.displayName,
            customer_email: user.email
        }
        fetch('https://cryptic-plateau-56093.herokuapp.com/all_orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
            
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order Placed Successfully');
                
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            {
                toys.map(toy => toy._id === id ?
                    <Container sx={{textAlign: 'center'}}>
                        <h1 style={{color: '#00cba9', m: 5}}>Place Your Order</h1>
                        <form onSubmit={handleOrder}>
                            <TextField
                                sx={{ width: '50%', m: 2 }}
                                id="outlined-basic"
                                
                                label="Customer Name"
                                name="customer_name"
                                defaultValue={user.displayName}
                            />
                            <TextField
                                sx={{ width: '50%', m: 2 }}
                                id="outlined-basic"
                                label="Customer Email"
                                name="customer_name"
                                defaultValue={user.email}
                            />
                            <TextField
                                sx={{display: 'none'}}
                                
                                type="hidden"
                                
                                name="status"
                                defaultValue="pending"
                            />
                            <TextField
                                sx={{ width: '50%', m: 2 }}
                                id="outlined-basic"
                                
                                label="Toy Name"
                                name="toy_name"
                                defaultValue={toy.toy_name} />
                            <TextField
                                sx={{ width: '50%', m: 2 }}
                                id="outlined-basic"
                                
                                label="Price"
                                name="toy_price"
                                defaultValue={toy.toy_price}
                            />
                            <TextField
                                sx={{ width: '50%', m: 2 }}
                                id="outlined-multiline-static"
                                onBlur={handleOnBlur}
                                label="Address"
                                multiline
                                name="address"
                                rows={4}

                            />
                            <TextField
                                sx={{ width: '50%', m: 2 }}
                                id="outlined-number"
                                onBlur={handleOnBlur}
                                label="Zip Code"
                                type="number"
                                name="zip_code"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                sx={{ width: '50%', m: 2 }}
                                id="outlined-number"
                                onBlur={handleOnBlur}
                                label="Phone Number"
                                type="number"
                                name="phone_number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <br/>
                            <Button type="submit" variant="contained" sx={{width: '30%', ml: 7, mt: 5, backgroundColor: '#00cba9', fontWeight: 'bold'}}>Submit</Button>
                        </form>
                    </Container> : '')
            }
        </div>
    );
};

export default Purchase;
