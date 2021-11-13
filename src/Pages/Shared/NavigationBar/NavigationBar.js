import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Login, Logout, Person } from '@mui/icons-material';
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';
import NavBarPhone from '../NavbarPhone/NavbarPhone'



const Navigation = () => {
    const { user, logout } = useAuth();


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ py: 2, backgroundColor: 'rgb(35, 34, 34)' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0 }}
                    >

                    </IconButton>
                    <Box style={{ display: { xs: 'block', md: 'hidden' } }}>
                        <NavBarPhone></NavBarPhone>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'inline' }, m: 2, flexGrow: 1, color: "rgb(35, 34, 34)" }}>
                        Bikers Corner
                    </Typography>
                    <NavLink style={{ alignContent: 'center', m: 2, display: { xs: 'none', md: 'inline' }, textDecoration: 'none', color: 'white', }} to='/bikes'>
                        <Button sx={{ m: 2, display: { xs: 'none', md: 'inline' }, backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD' }} variant="contained" color="inherit">Explore
                        </Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Box>

                                <NavLink style={{ display: { xs: 'none', md: 'inline' }, m: 2, textDecoration: 'none', color: 'white' }} to='/dashboard'>
                                    <Button sx={{ m: 2, display: { xs: 'none', md: 'inline' }, backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD' }} variant="contained" color="inherit">Dashboard</Button>
                                </NavLink>


                                <Button
                                    sx={{ m: 2, display: { xs: 'none', md: 'inline' }, backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD' }} variant="contained"
                                    onClick={logout}
                                    color="inherit"><Logout></Logout>
                                </Button>
                                <Typography variant="h6" sx={{ m: 2, display: { xs: 'inline', md: 'inline' }, backgroundColor: '#C54B47', borderBottom: '3px solid white', borderRadius: '10px', padding: '9px' }}>
                                    <Person /> {user.displayName}
                                </Typography>
                            </Box>

                            :
                            <NavLink style={{ m: 2, display: { xs: 'none', md: 'inline' }, textDecoration: 'none', color: 'white' }} to='/login'>
                                <Button color="inherit"><Login></Login></Button>
                            </NavLink>
                    }


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;