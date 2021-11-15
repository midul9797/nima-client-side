import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=> {
        fetch('https://cryptic-plateau-56093.herokuapp.com/all_orders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    })
    const handleShipped = () => {
        
    }
    const handleCancel = id => {
        fetch(`https://cryptic-plateau-56093.herokuapp.com/all_orders/${id}`, {
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
            <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5,color: '#00cba9' }}>Manage All Orders</Typography>
            <table style={{width: "100%", borderSpacing: "10px 20px"}}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Cancel</th>
                </tr>
            {
                allOrders.map(myOrders => 
                <tr>
                    <td>{myOrders.customer_name}</td>
                    <td>{myOrders.customer_email}</td>
                    <td>{myOrders.address}</td>
                    <td>{myOrders.phone_number}</td>
                    <td>{myOrders.status}</td>
                    { myOrders.status === 'pending' ?
                    <Button onClick={handleShipped} variant="contained" sx={{backgroundColor: 'green', fontWeight: 'bold'}}>Shipped</Button>
                    : '' 
                    }
                    <Button onClick={()=> handleCancel(myOrders._id)} variant="contained" sx={{backgroundColor: 'red', fontWeight: 'bold'}}>Cancel</Button>
                </tr> )
            }
            </table>
        </div>
    );
};

export default ManageAllOrders;