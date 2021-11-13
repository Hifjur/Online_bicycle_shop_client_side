import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    useRouteMatch
} from "react-router-dom";

import { NavLink } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';

import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Login, Logout, Person } from '@mui/icons-material';
import AddBike from '../AddBike/AddBike';
import ManageBikes from '../ManageBikes/ManageBikes';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import Review from '../../Review/Review';
import AddPhoto from '../../AddPhoto/AddPhoto';


const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box style={{ backgroundColor: 'rgb(35, 34, 34)', height: '100%' }}>
            <Toolbar />
            <Divider />
            <div>
                <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to='/home'>
                    <Button sx={{ backgroundColor: '#C54B47', color:'whtie'  }} color="inherit">Home Page</Button>
                </NavLink>
                {!admin && <Box>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to='/bikes'>
                        <Button sx={{ backgroundColor: '#C54B47', color:'whtie' }} color="inherit">Explore More</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}`}>
                        <Button sx={{ backgroundColor: '#C54B47', color:'whtie' }} color="inherit">My Orders</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/review`}>
                        <Button sx={{ backgroundColor: '#C54B47', color:'whtie' }} color="inherit">Review</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/social`}>
                        <Button sx={{ backgroundColor: '#C54B47',color:'whtie'  }} color="inherit">Make Social Post</Button>
                    </NavLink>
                </Box>}
                {admin && <Box>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}`}>
                        <Button sx={{ backgroundColor: '#C54B47',color:'whtie'  }} color="inherit">Mange All Orders</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/makeAdmin`}>
                        <Button sx={{ backgroundColor: '#C54B47',color:'whtie'  }} color="inherit">Make Admin</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/addproducts`}>
                        <Button sx={{ backgroundColor: '#C54B47', color:'whtie' }} color="inherit">Add Bike</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/manageproducts`}>
                        <Button sx={{ backgroundColor: '#C54B47',color:'whtie'  }} color="inherit">Manage Bikes</Button>
                    </NavLink>


                </Box>}
            </div>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', hight: '100%' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'rgb(35, 34, 34)',
                    paddingY:1,
                   
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "D3BDBD" }}>
                        Dashboard
                    </Typography>
                    {
                        user?.email ?
                            <Box>
                                <Typography variant="h6" sx={{ display: 'inline', backgroundColor: '#C54B47', borderBottom: '3px solid white', borderRadius: '10px', padding: '9px', marginY: '3px' }}>
                                    <Person /> {user.displayName}
                                </Typography>
                                <Button
                                    sx={{ backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD',m:2 }} variant="contained"
                                    onClick={logout}
                                    color="inherit"><Logout></Logout></Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white', m:2 }} to='/login'>
                                <Button color="inherit"><Login/></Button>
                            </NavLink>
                    }
                </Toolbar>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>


                    <PrivateRoute exact path={path}>
                        <DashboardHome></DashboardHome>
                    </PrivateRoute>

                    <PrivateRoute path={`${path}/review`}>
                        <Review></Review>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/social`}>
                        <AddPhoto></AddPhoto>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproducts`}>
                        <AddBike></AddBike>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageBikes></ManageBikes>
                    </AdminRoute>

                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
