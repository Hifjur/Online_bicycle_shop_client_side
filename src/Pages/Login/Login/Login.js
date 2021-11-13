
import { Google } from '@mui/icons-material';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';

import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, error, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={12}>
                    <Typography variant="h2" gutterBottom>
                        Login
                    </Typography>
                    <form style={{ hight: '500px' }} onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <br />
                        <Button sx={{ backgroundColor: '#C54B47', color: 'whtie', width: '75%' }} type="submit" color="inherit">Login</Button>
                        <br />
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant="text">New user? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Account Creation Successful</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                    </form>
                    <p style={{ color: "gray", fontWeight: 800 }}>___________________________________</p>
                    <Button onClick={handleGoogleSignIn} sx={{ backgroundColor: "orange" }} variant="contained"><Google sx={{ padding: 2 }}></Google></Button>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to='/home'>
                        <Button sx={{ 
                            marginY: 2,
                            padding:2,
                            backgroundColor: '#C54B47', color: 'whtie' }} color="inherit">Home Page</Button>
                    </NavLink>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;