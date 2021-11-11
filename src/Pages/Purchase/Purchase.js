import { Button, TextField, Alert, Typography, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {
    const { _id } = useParams();
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);
    const [purchaseComplete, setPurchaseComplete] = useState(false);
    const history = useHistory();

    const [bike, setBikes] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBikes(data);
            });
    }, [_id]);
    const { name, description, price, img, catagory } = bike;
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }

    const handleOrderConfirmation = e => {
        e.preventDefault();
        const orders = {
            ...purchaseInfo,
            productName: name,
            productUniqueId: _id,
            status: "pending",
            price: price,
            img: img

        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setPurchaseComplete(true);
                    history.push('/payment');

                }
            })

        e.preventDefault();
    }
    return (
        <Container>
            <img style={{margin: '20px', borderRadius:'20px'}} src={img} alt="" />
            <Typography sx={{ color: '#C54B47', fontWeight: 'medium' }} gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography sx={{ color: '#C54B47', fontWeight: 'medium' }} variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant="body1" sx={{ color: 'green', fontWeight: 'bold' }}>
                {catagory} Bike
            </Typography>
            <Typography sx={{ color: '#C54B47', fontWeight: 'medium' , fontSize:'30px' }} variant="body2" color="text.secondary">
                Price: ${price}
            </Typography>


            {purchaseComplete && <Alert severity="success">Purchased Successfully</Alert>}

            <form style={{backgroundColor: 'white', paddingTop: '20px', borderRadius:'30px'}} onSubmit={handleOrderConfirmation}>

                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="customerName"
                    onBlur={handleOnBlur}
                    label="Name"
                    defaultValue={user.displayName}
                    id="outlined-size-small"
                    size="small"
                />

                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="email"
                    onBlur={handleOnBlur}
                    label="Email"
                    defaultValue={user.email}
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="phone"
                    onBlur={handleOnBlur}
                    label="Phone Number"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="road"
                    onBlur={handleOnBlur}
                    label="Road Number"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="P.O"
                    onBlur={handleOnBlur}
                    label="Postal code"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    name="city"
                    onBlur={handleOnBlur}
                    label="City"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    disabled
                    sx={{ width: '70%', m: 1 }}
                    name="status"
                    onBlur={handleOnBlur}
                    label="Order Status"
                    id="outlined-size-small"
                    size="small"
                    defaultValue="pending"
                />
                <br />
                <Button sx={{ backgroundColor: '#C54B47', m: 1 }} type="submit" variant="contained">Payment</Button>
            </form>
            <NavLink to='/'>
            <Button variant="text">Explore more bikes</Button>
            </NavLink>
        </Container>
    );
};

export default Purchase;