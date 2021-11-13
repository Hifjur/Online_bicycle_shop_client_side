import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, error, registerUser, isLoading } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match!');
            return
        }

        registerUser(loginData.name, loginData.email, loginData.password, history);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={12}>
                    <Typography variant="h2" gutterBottom>
                        Register
                    </Typography>
                    {
                        !isLoading &&
                        <form style={{ height: '400px' }} onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="username"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="email"
                                type="email"
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
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="re-enter password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button sx={{ backgroundColor: '#C54B47', color: 'whtie', width: '75%' }} type="submit" color="inherit">Register</Button> <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already registered? Please login</Button>
                            </NavLink>
                        </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Account Creation Successful</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to='/home'>
                        <Button sx={{
                            marginY: 2,
                            padding: 2,
                            backgroundColor: '#C54B47', color: 'whtie'
                        }} color="inherit">Home Page</Button>
                    </NavLink>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;