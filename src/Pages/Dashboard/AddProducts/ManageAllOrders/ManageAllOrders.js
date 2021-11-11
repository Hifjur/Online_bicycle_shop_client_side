import { Button, Table, TableContainer, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

const ManageAllOrders = () => {
    const { token } = useAuth();
    const [allOrders, setAllOrders] = useState([])
    const [success, setSucsess] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/orders/admin', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data);
            });
    }, [token, success])

    const handleShipping = (orderId) => {
        const id={orderId}
        fetch('http://localhost:5000/orders/admin', {
            method:'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(id)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSucsess(true);
                console.log(data);
                
            }
            
        })
    }
    return (
        <div>
            <Typography variant="h1" sx={{fontWeight:500, padding: '30px', color: 'white', backgroundColor:'rgb(35, 34, 34)'}}>MANAGE ALL ORDERS</Typography>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments List">
                    <TableHead>
                        <TableRow>
                            <TableCell>Custormer</TableCell>
                            <TableCell align="right">Product Preview</TableCell>
                            <TableCell align="right">Products</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <span style={{ fontSize: "20px", color: 'gray' }}>{row.customerName}</span> <br />
                                    <span style={{ color: 'green' }}>Address: {row.road}  {row.PO} <br />  {row.city} <br /> Phone: {row.phone}</span>
                                </TableCell>
                                <TableCell align="right"><img style={{ height: '100px', width: '125px', borderRadius: '20px' }} src={row.img} alt="" /></TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">

                                    <Button onClick={()=>handleShipping(`${row.orderId}`)} sx={{ backgroundColor: '#C54B47', m: 1 }} variant="contained">Mark as shipped</Button>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;