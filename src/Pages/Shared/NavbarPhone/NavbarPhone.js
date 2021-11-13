import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import useAuth from '../../../Hooks/useAuth';
import { Login, Logout, MenuOpen, Person } from '@mui/icons-material';
import { Typography } from '@mui/material';

export default function BasicMenu() {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{display: {xs:'block', md:'hidden'}}}>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuOpen sx={{display: {xs:'block', md:'hidden'}}}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><NavLink style={{ alignContent: 'center', m: 2, display: { xs: 'block', md: 'inline' }, textDecoration: 'none', color: 'white', }} to='/bikes'>
                    <Button sx={{display: { xs: 'block', md: 'inline' }, backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD' }} variant="contained" color="inherit">Explore
                    </Button>
                </NavLink></MenuItem>
                {user?.email ? <Box>

                    <MenuItem onClick={handleClose}><NavLink style={{ display: { xs: 'block', md: 'inline' }, m: 2, textDecoration: 'none', color: 'white' }} to='/dashboard'>
                        <Button sx={{ display: { xs: 'block', md: 'hidden' }, backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD' }} variant="contained" color="inherit">Dashboard</Button>
                    </NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><Button
                        sx={{ m: 2, display: { xs: 'block', md: 'hidden' }, backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD' }} variant="contained"
                        onClick={logout}
                        color="inherit"><Logout></Logout>
                    </Button></MenuItem>
                    <MenuItem onClick={handleClose}><Typography variant="h6" sx={{ m: 2, display: { xs: 'none', md: 'hidden' }, backgroundColor: '#C54B47', borderBottom: '3px solid white', borderRadius: '10px', padding: '9px' }}>
                        <Person /> {user.displayName}
                    </Typography></MenuItem>

                </Box>
                    : <Box>
                        <MenuItem onClick={handleClose}><NavLink style={{ m: 2, textDecoration: 'none', color: 'white' }} to='/login'>
                            <Button color="inherit"><Login></Login></Button>
                        </NavLink></MenuItem>


                    </Box>}
            </Menu>
        </Box>
    );
}
