import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSucsess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleSubmit = e => {
        const user = {email};
        fetch('https://shrouded-tor-90105.herokuapp.com/users/admin', {
            method:'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSucsess(true);
                console.log(data);
                
            }
            
        })
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h1" sx={{fontWeight:500, paddingY: '30px', fontSize:{xs:'40px', md: '70px'}, color: 'white', marginTop: 3, backgroundColor:'rgb(35, 34, 34)'}}>Make an Admin</Typography>
            <form style={{backgroundColor: 'white', paddingTop: '20px', height: '500px'}} onSubmit={handleSubmit}>
                <TextField
                sx={{width:'75%'}}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <br />
                <Button sx={{ marginY:20, backgroundColor: '#C54B47', color:'whtie' }} color="inherit" type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin Assigning Successful</Alert>}
        </div>
    );
};

export default MakeAdmin;