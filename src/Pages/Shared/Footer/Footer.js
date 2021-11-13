import { CopyrightOutlined, Place, CopyrightSharp, EmailOutlined, FacebookOutlined, PhoneAndroidOutlined, Twitter } from '@mui/icons-material';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    const style = {
        backgroundColor: 'rgb(35, 34, 34)',
        color: '#D8D2BE',
        textAlign: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        position: "static",
        left: "0",
        bottom: "0",

        width: "100%",
        marginTop: '50px'
    }
    return (

        <div style={style} >
            <Container >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{paddingY:4}} variant="h4">Contact us!</Typography>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid direction="column" align="left" item xs={6}>
                                <FacebookOutlined sx={{ marginX: 1 }} /> @bikerzcorner
                            </Grid>
                            <Grid direction="column" align="left" item xs={6}>
                                <Twitter sx={{ marginX: 1 }} /> @bikerzcorner
                            </Grid>
                            <Grid direction="column" align="left" item xs={6}>
                                <EmailOutlined sx={{ marginX: 1 }} /> bikerz@bike.com
                            </Grid>
                            <Grid direction="column" align="left" item xs={6}>
                                <PhoneAndroidOutlined sx={{ marginX: 1 }} /> +9968458245766
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{paddingY:4}} variant="h4">Address</Typography>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid direction="column" align="center" item xs={12}>
                                <Place />
                                <Typography variant="body2">
                                     Street: 430 Simpson Avenue <br />
                                    City: Harrisburg <br />
                                    State/Province:  abbr	PA <br/>
                                    State/Province full :	Pennsylvania <br />
                                    Zip Code/Postal code :	17109 <br />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1">Bikers Corner ltd.</Typography>
                <Typography variant="subtitle1">Copyright all right reserved <CopyrightOutlined /></Typography>

            </Container>
        </div>
    );
};

export default Footer;