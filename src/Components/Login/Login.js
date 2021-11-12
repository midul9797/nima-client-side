import { Button, TextField, Grid, Alert, CircularProgress, Typography } from '@mui/material';
import useAuth from '../../Hook/useAuth';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import loginBg from '../../images/login_bg.png';

const Login = () => {
    const { loginWithEmail, handleEmail, handlePassword, error, setUser, setError, user, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';

    const logIn = e => {
        e.preventDefault();
        loginWithEmail()
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
                history.push(redirect)

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Grid container  spacing={2}>
            <Grid item sx={{mt: 10, ml: 5}} xs={12} md={5}>
            <Typography variant="h4" sx={{mb: 5, color: "#00cba9", fontWeight: 800}}>Login</Typography>
                <form onSubmit={logIn}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        onBlur={handleEmail}
                        id="standard-basic"
                        label="Email"
                        variant="standard" />
                    <br />
                    <TextField sx={{ width: '75%', m: 1 }}
                        onBlur={handlePassword}
                        id="standard-basic"
                        label="Password"
                        variant="standard" />
                    <br />
                    <Button sx={{ width: '50%', mt: 5, ml: 10, fontWeight: 800 , backgroundColor: '#00cba9'}} type="submit" variant="contained">Submit</Button>
                    <br/>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/signup">
                        <Button variant="text" sx={{fontWeight: 800, ml: 15, mt: 5}}>New User? Sign Up!!!</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={loginBg} alt="" style={{width: '110%'}} />
            </Grid>
        </Grid>

    );
};

export default Login;