
import { Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <>
            <Typography variant="h1" sx={{fontSize:{md:'100px',xs:'40px'}, marginTop:'-1px', paddingTop: {md:'300px', xs:'50px'}, fontWeight:'bold',backgroundSize: {md:'auto', xs:'500px 300px'}, paddingBottom:'0px' ,backgroundRepeat: 'no-repeat', color:'white',backgroundImage:'url("https://i.ibb.co/SwBGwZj/cover-new.jpg")', height:'300px', width:'100%'}}>BIKERS CORNER</Typography>
            
            
        </>
    );
};

export default Banner;