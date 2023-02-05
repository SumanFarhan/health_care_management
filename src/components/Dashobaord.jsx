import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Lottie from "lottie-react";
import { useState, useEffect } from 'react';
import axios from 'axios'
import DoctorsData from './Doctorsdata'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Health Care Management System
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Dashobaord() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3007/login/success')
            .then(res => {
                setUser(res.data);
            });
    }, []);

    // axios.get('http://localhost:3007/login/success')
    //     .then(res => {
    //         const user = res.data.message;
    //         console.log(user);
    //     });

    console.log(user)


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <LocalHospitalIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap user={user}>
                        Health Care Management System
                        {/* {user ? (
                            <p>Hello, {user.displayName}!</p>
                        ) : (
                            <p>Loading...</p>
                        )} */}
                    </Typography>
                </Toolbar>

            </AppBar>
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {DoctorsData.map((card) => (
                            <Grid item key={card} xs={12} sm={12} md={12}>
                                <Card
                                    sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row' }}
                                >
                                    {/* <CardMedia
                                        component="img"
                                        sx={{
                                            height: '100%', width: '10%', p: 2
                                        }}>
                                            Hi
                                        <Lottie
                                            animationData={Excercisegirl}
                                            loop={true}
                                            className="animationImage"
                                        />,
                                    </CardMedia> */}

                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            <span style={{color:'#9c27b0'}}>No.of opeartion:</span>{card.opeartion}
                                            <br />
                                            Days:{card.Days}
                                            <br />
                                            OPD Timing:{card.timing}
                                            <br />
                                            Specialization:{card.specialization}
                                            <br />
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}

