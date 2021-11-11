import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

import { NavLink } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';

import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Person } from '@mui/icons-material';
import AddBike from '../AddBike/AddBike';
import ManageBikes from '../ManageBikes/ManageBikes';


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
        <div>
            <Toolbar />
            <Divider />
            <div>
                {!admin && <Box>
                    <NavLink style={{ display: 'block', margin: 3, textDecoration: 'none', color: 'black' }} to='/bikes'>
                        <Button sx={{ backgroundColor: '#C54B47', }} color="inherit">Explore More</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', margin: 3, textDecoration: 'none', color: 'black' }} to={`${url}`}>
                        <Button sx={{ backgroundColor: '#C54B47', }} color="inherit">Dashboard</Button>
                    </NavLink>
                </Box>}
                {admin && <Box>
                    <NavLink style={{ display: 'block', margin: 3, textDecoration: 'none', color: 'black' }} to={`${url}`}>
                        <Button sx={{ backgroundColor: '#C54B47', }} color="inherit">Mange All Orders</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', margin: 3, textDecoration: 'none', color: 'black' }} to={`${url}/makeAdmin`}>
                        <Button sx={{ backgroundColor: '#C54B47', }} color="inherit">Make Admin</Button>
                    </NavLink>
                    <NavLink to={`${url}/addproducts`}>
                        <Button sx={{ backgroundColor: '#C54B47', }} color="inherit">Add Bike</Button>
                    </NavLink>
                    <NavLink to={`${url}/manageproducts`}>
                        <Button sx={{ backgroundColor: '#C54B47', }} color="inherit">Manage Bikes</Button>
                    </NavLink>


                </Box>}
            </div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'rgb(35, 34, 34)'
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
                                <Typography variant="h6" sx={{ display: 'inline', backgroundColor: '#C54B47', borderBottom: '3px solid white', borderRadius: '10px', padding: '9px', margin: '3px' }}>
                                    <Person /> {user.displayName}
                                </Typography>
                                <Button
                                    sx={{ backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD' }} variant="contained"
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


                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
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
