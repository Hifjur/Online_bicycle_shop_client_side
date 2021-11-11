import { Alert, Button, Table, TableContainer, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { DeleteForeverOutlined } from '@mui/icons-material';


const ManageBikes = () => {
    const { token } = useAuth();
    const [allBikes, setAllBikes] = useState([])
    const [success, setSucsess] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/bikes', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllBikes(data);
            });
    }, [token, success])


    const handleDelete = id => {
        setSucsess(false);
        if (window.confirm('Are you sure you want to delete this bike from database?')) {
            
            const url = `http://localhost:5000/bikes/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${token}`,

                },
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
            <Typography variant="h1" sx={{ fontWeight: 500, padding: '30px', color: 'white', backgroundColor: 'rgb(35, 34, 34)' }}>MANAGE ALL BIKES</Typography>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments List">
                    <TableHead>
                        <TableRow>

                            <TableCell align="right">Product Preview</TableCell>
                            <TableCell align="right">Products</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Process Products</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allBikes.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="right"><img style={{ height: '100px', width: '125px', borderRadius: '20px' }} src={row.img} alt="" /></TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">

                                    <Button onClick={() => handleDelete(row._id)} sx={{ backgroundColor: '#C54B47', m: 1 }} variant="contained"><DeleteForeverOutlined></DeleteForeverOutlined> </Button>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {success && <Alert severity="success">Deleted Successfully</Alert>}
        </div>
    );
};

export default ManageBikes;