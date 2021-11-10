import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: 'rgb(35, 34, 34)' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bikers Corner
                    </Typography>
                    <NavLink  style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid white',}} to='/bikes'>
                        <Button color="inherit">Explore</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid white',}} to='/dashboard'>
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Typography variant="h6" sx={{ display: 'inline', backgroundColor:'#C54B47' ,borderBottom: '3px solid white', borderRadius: '10px', padding: '5px', margin:'3px' }}>
                                    Hi {user.displayName}
                                </Typography>
                                <Button
                                    onClick={logout}
                                    color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;