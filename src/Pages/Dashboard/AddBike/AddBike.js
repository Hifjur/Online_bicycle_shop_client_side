import { Add } from '@mui/icons-material';
import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AddBike = () => {
    
    const [productInfo, setProdutInfo] = useState({})
    const [bikeAdded, setBikeAdded] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        if(newInfo["key"]<7){
            setProdutInfo(newInfo);
        }
        else
        {   
            const keyGenerator = Math.round(Math.random()*1000);
            const key = keyGenerator.toString();
            newInfo["key"]= key;
            setProdutInfo(newInfo);
        }
    }

    const handleOrderConfirmation = e => {
        setBikeAdded(false);
        e.preventDefault();
        
        fetch('https://shrouded-tor-90105.herokuapp.com/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBikeAdded(true);
                    

                }
            })

        e.preventDefault();
    }
    return (
        <Container>
            
            
            <Typography variant="h1" sx={{fontWeight:500, padding: '30px', color: 'white', marginTop: 3, backgroundColor:'rgb(35, 34, 34)'}}>ADD NEW BIKES</Typography>
            
            {bikeAdded && <Alert severity="success">Purchased Successfully</Alert>}

            <form style={{backgroundColor: 'white', paddingTop: '20px', height: '500px'}} onSubmit={handleOrderConfirmation}>

                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="name"
                    onBlur={handleOnBlur}
                    label="Product Name"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '70%', m: 1 }}
                    name="key"
                    onBlur={handleOnBlur}
                    label="Set Key < 7 to appear on home"
                    id="outlined-size-small"
                    size="small"
                />

                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="description"
                    onBlur={handleOnBlur}
                    label="Description"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="price"
                    onBlur={handleOnBlur}
                    label="Price"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="img"
                    onBlur={handleOnBlur}
                    label="Image"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="catagory"
                    onBlur={handleOnBlur}
                    label="Catagory"
                    id="outlined-size-small"
                    size="small"
                />
                <br />
                <Button sx={{ backgroundColor: '#C54B47', m: 1 }} type="submit" variant="contained"> <Add sx={{marginX:1}}/> Add To Database</Button>
            </form>
            <NavLink style={{textDecoration:'none'}} to='/dashboard'>
            <Button sx={{margin: '20px'}} variant="outlined">Dashboard</Button>
            </NavLink>
        </Container>
    );
};

export default AddBike;