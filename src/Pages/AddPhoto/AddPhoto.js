import {  PostAdd } from '@mui/icons-material';
import { Alert, Button, Container,TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import useAuth from '../../Hooks/useAuth';

const AddPhoto = () => {
    const { user } = useAuth();
    const initialInfo = { author: user.displayName, email: user.email};
    const [socialData, setSocialData] = useState(initialInfo)
    const [photoAdded, setPhotoAdded] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...socialData };
        newInfo[field] = value;
        setSocialData(newInfo);
    }

    const handlePostingReview = e => {
        
        e.preventDefault();

        fetch('https://shrouded-tor-90105.herokuapp.com/social', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(socialData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setPhotoAdded(true);


                }
            })

        e.preventDefault();
    }
    return (
        <Container>


            <Typography variant="h1" sx={{ fontWeight: 500, padding: '30px', color: 'white', marginTop: 3, backgroundColor: 'rgb(35, 34, 34)',fontSize:{xs:40, md:100} }}>MAKE A POST</Typography>

            {photoAdded && <Alert severity="success">Posted Successfully</Alert>}

            <form style={{ backgroundColor: 'white', paddingTop: '20px', height: '500px' }} onSubmit={handlePostingReview}>

            <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="author"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    label="Name"
                    id="standard-basic"
                    variant="standard"
                    
                />
            <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="email"
                    defaultValue={user.email}
                    onBlur={handleOnBlur}
                    label="Email"
                    id="standard-basic"
                    variant="standard"
                    
                />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="title"
                    onBlur={handleOnBlur}
                    
                    label="Caption"
                    id="standard-basic"
                    variant="standard"
                    
                />
                <TextField
                    id="standard-multiline-static"
                    name="img"
                    label="Link to Your picture. Reccomnended size is 500x400 for optimal layout in the home page image box"
                    sx={{ width: '70%', m: 1 }}
                    onBlur={handleOnBlur}
                    multiline
                    rows={8}
                    
                    variant="standard"
                />
                <br />
                
                <Button sx={{ backgroundColor: '#C54B47', m: 1 }} type="submit" variant="contained"><PostAdd/> Post Picture</Button>
            </form>
            
        </Container>
    );
};

export default AddPhoto;