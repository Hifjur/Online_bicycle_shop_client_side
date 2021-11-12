import { Button, Table, TableContainer, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DeleteOutlineOutlined } from '@mui/icons-material';


const ManageAllOrders = () => {
    const { token } = useAuth();
    const [allOrders, setAllOrders] = useState([])
    const [success, setSucsess] = useState(false);
    useEffect(() => {
        fetch('https://shrouded-tor-90105.herokuapp.com/orders/admin', {
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
        setSucsess(false);
        const id={orderId}
        fetch('https://shrouded-tor-90105.herokuapp.com/orders/admin', {
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

    const handleDelete = orderId => {
        setSucsess(false);
        const id={orderId}
        if (window.confirm('Are you sure you want to delete this bike from database?')) {
            
            const url = `https://shrouded-tor-90105.herokuapp.com/orders`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization' : `Bearer ${token}`,
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(id)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setSucsess(true);
                        console.log(data);

                    }

                })
            
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }


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
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Confirm</TableCell>
                            <TableCell align="right">Cancle</TableCell>
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
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">

                                    <Button onClick={()=>handleShipping(`${row.orderId}`)} sx={{ backgroundColor: '#C54B47', m: 1 }} variant="contained">Mark as shipped</Button>

                                </TableCell>
                                <TableCell align="right"><Button onClick={()=>handleDelete(row.orderId)} sx={{ backgroundColor: '#C54B47', m: 1 }} variant="contained"><DeleteOutlineOutlined></DeleteOutlineOutlined></Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;