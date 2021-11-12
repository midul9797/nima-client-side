import { Button, TextField, Grid, Alert, CircularProgress, Typography } from '@mui/material';
import useAuth from '../../Hook/useAuth';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import loginBg from '../../images/login_bg.png';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const SignUp = () => {
    const {  handleName,handleEmail, handlePassword, error, userName, password, email, auth, setError, user, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';
    const handleSignUp = e => {
        e.preventDefault();
        if(password.length < 8){
            setError('Password must be at least 8 characters!!!!!');
            return;
        }
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)){
            setError('At least one Uppercase, one lowercase, one number, one special character');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            userName();
          setError('');
          history.push(redirect)
        })
        .catch(error => {
          console.log(error)
          setError(error.message);
        })
    }
    return (
        <Grid container  spacing={2}>
            <Grid item sx={{mt: 5, ml: 5}} xs={12} md={5}>
            <Typography variant="h4" sx={{color: '#00cba9', fontWeight: 800}}>Sign Up</Typography>
                <form onSubmit={handleSignUp}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        onBlur={handleName}
                        id="standard-basic"
                        label="Name"
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        onBlur={handleEmail}
                        id="standard-basic"
                        label="Email"
                        variant="standard" />
                    
                    <TextField sx={{ width: '75%', m: 1 }}
                        onBlur={handlePassword}
                        id="standard-basic"
                        type="password"
                        label="Password"
                        variant="standard" />
                    <TextField sx={{ width: '75%', m: 1 }}
                        onBlur={handlePassword}
                        id="standard-basic"
                        type="password"
                        label="Confirm Password"
                        variant="standard" />
                    <br />
                    <Button sx={{ width: '50%', mt: 5, ml: 10, fontWeight: 800, backgroundColor: '#00cba9' }} type="submit" variant="contained">Submit</Button>
                    <br/>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/login">
                        <Button type="submit" variant="text" sx={{fontWeight: 800, ml: 8, mt: 5}}>Already have an account? Log In</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </form>
            </Grid>
            <Grid item xs={12} md={6} sx={{mt: 5}}>
                <img src={loginBg} alt="" style={{width: '110%'}} />
            </Grid>
        </Grid>
    );
};

export default SignUp;