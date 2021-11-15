import { CircularProgress } from '@mui/material';
import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
    
        return <div style={{textAlign: 'center'}}><CircularProgress /></div>
    }
   
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;