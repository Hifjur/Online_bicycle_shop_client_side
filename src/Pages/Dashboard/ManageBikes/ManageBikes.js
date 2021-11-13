import { Alert, Button, Table, TableContainer, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';


const ManageBikes = () => {
    const { token } = useAuth();
    const [allBikes, setAllBikes] = useState([])
    const [success, setSucsess] = useState(false);
    useEffect(() => {
        fetch('https://shrouded-tor-90105.herokuapp.com/bikes', {
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

            const url = `https://shrouded-tor-90105.herokuapp.com/bikes/${id}`
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
        <>
            <Typography variant="h1" sx={{ width: '100%', fontWeight: 500, paddingY: '30px', fontSize:{xs:'40px', md:"70px"}, color: 'white', backgroundColor: 'rgb(35, 34, 34)' }}>MANAGE BIKES</Typography>
            <Box sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label=" List">
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
            </Box>
            <Box sx={{ width: '100%', display: { xs: 'block', md: 'none' }}}>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label=" List">
                        <TableBody>
                            {allBikes.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{
                                        display: { xs: 'grid' },
                                        gridAutoColumns: { xs: '1fr' },
                                        gap: { xs: 1 },
                                    }}
                                >

                                    <TableCell align="center">
                                        <span style={{ fontSize: "20px", color: 'gray', fontWeight: 500 }}>Product Preview</span> <br />
                                        <img style={{ height: '100px', width: '125px', borderRadius: '20px' }} src={row.img} alt="" />
                                    </TableCell>
                                    <TableCell align="center">
                                        <span style={{ fontSize: "20px", color: 'gray', fontWeight: 500 }}>Products:</span>
                                        <span style={{ fontSize: "20px", color: 'black', fontWeight: 500 }}>{row.name}</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <span style={{ fontSize: "20px", color: 'gray', fontWeight: 500 }}>Price:</span>
                                        <span style={{ fontSize: "20px", color: 'black', fontWeight: 500 }}>{row.price}</span>
                                    </TableCell>
                                    <TableCell align="center">

                                        <Button onClick={() => handleDelete(row._id)} sx={{ backgroundColor: '#C54B47', m: 1 }} variant="contained"><DeleteForeverOutlined></DeleteForeverOutlined> </Button>

                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {success && <Alert severity="success">Deleted Successfully</Alert>}
        </>
    );
};

export default ManageBikes;