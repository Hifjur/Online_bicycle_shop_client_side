import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import ListSubheader from '@mui/material/ListSubheader';


import { Button, Grid, Typography } from '@mui/material';
import SocialPanlePhoto from '../SocialPanelPhoto/SocialPanlePhoto';
import { NavLink } from 'react-router-dom';
import { Share } from '@mui/icons-material';


const SocialPanel = () => {
    const [socialPhoto, setSocialPhoto] = React.useState([])
    React.useEffect(() => {
        fetch('https://shrouded-tor-90105.herokuapp.com/social')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSocialPhoto(data);
            });
    }, [])
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"

        >   <div style={{maxWidth:'80%'}}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white', paddingY: 10, backgroundColor: '#C54B47' }}>Custormer's Corner</Typography>
                <ImageList sx={{ justifyContent: 'center', height: 713, margin: 0, backgroundColor: 'rgb(35, 34, 34)', padding: 4, border: ' 5px solid #C54B47' }}>
                    <ImageListItem key="Subheader" cols={2}>
                        <ListSubheader sx={{ backgroundColor: 'rgb(35, 34, 34)', color: 'white' }} component="div">Share Your Riding Journey</ListSubheader>
                    </ImageListItem>
                    {socialPhoto.map((item) => (
                        <SocialPanlePhoto item={item}></SocialPanlePhoto>
                    ))}
                </ImageList>
                <NavLink style={{ textDecoration: 'none' }} to='/dashboard/social'>
                    <Button sx={{ backgroundColor: '#C54B47', m: 1 }} type="submit" variant="contained"> <Share sx={{marginX:1}}/> Share Your Photo</Button>
                </NavLink>
            </div>
        </Grid>
    );
}

export default SocialPanel







