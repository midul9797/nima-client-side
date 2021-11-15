import { Button, TextField, Alert, Typography } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
    
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://cryptic-plateau-56093.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>  {
            if (data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5,color: '#00cba9' }}>Make Admin</Typography>
            <form onSubmit={handleAdminSubmit} style={{textAlign: 'center'}}>
            <TextField
                        sx={{ width: '50%', m: 1 }}
                        onBlur={handleOnBlur}
                        id="standard-basic"
                        type="email"
                        label="Email"
                        variant="standard" />
                        <br/>
            <Button variant="contained" type="submit" sx={{ mt: 5}} >Make Admin</Button>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;