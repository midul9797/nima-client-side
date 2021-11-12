import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:4000/all_orders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    })
    const handleCancel = id => {
        fetch(`http://localhost:4000/all_orders/${id}`, {
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
            <table style={{width: "100%", borderSpacing: "150px 20px"}}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Cancel</th>
                </tr>
            {
                allOrders.map(myOrders => myOrders.customer_email === user.email ? 
                <tr style={{marginLeft: '10%', borderBottom: '1px solid #ddd'}}>
                    <td>{myOrders.customer_name}</td>
                    <td>{myOrders.customer_email}</td>
                    <td>{myOrders.address}</td>
                    <td>{myOrders.phone_number}</td>
                    <Button onClick={()=> handleCancel(myOrders._id)} variant="contained" sx={{backgroundColor: 'red', fontWeight: 'bold'}}>Cancel</Button>
                </tr> : '' )
            }
            </table>
        </div>
    );
};

export default MyOrders;