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
import { useState, useEffect, useLocation } from 'react';
import axios from 'axios'
import TodayIcon from '@mui/icons-material/Today';
import DoctorsData from './Doctorsdata'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
import { useSearchParams, useParams } from 'react-router-dom'




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


const theme = createTheme();

export default function Dashobaord() {
    const logout = () => {
        window.open("http://localhost:3007/logout", "_self")
    }

    let { name } = useParams()
    console.log(name)

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     axios.get('http://localhost:3007/login/success')
    //         .then(res => {
    //             setUser(res.data);
    //         });
    // }, []);

    // axios.get('http://localhost:3007/login/success')
    //     .then(res => {
    //         const user = res.data.message;
    //         console.log(user);
    //     });

    // console.log(user)


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">

                <Toolbar>
                    <LocalHospitalIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Health Care Management System
                    </Typography>
                    <button className="btn-grad" onClick={logout}>LogOut</button>

                </Toolbar>

            </AppBar>
            <main>
                <Typography variant="h5" component="h2" style={{ textAlign: 'center', color: "#1976d2", fontWeight: 'bold' ,marginTop:'30px'}}>
                    <span>Welcome</span> {name}

                </Typography>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {DoctorsData.map((card) => (
                            <Grid item key={card} xs={12} sm={12} md={12}>
                                <Card
                                    sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row' }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: '100%', width: '37%', p: 2
                                        }}>

                                        <Lottie
                                            animationData={card.img}
                                            loop={true}
                                            className="animationImage"
                                        />,
                                    </CardMedia>

                                    <CardContent sx={{ flexGrow: 1 }} >
                                        <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center', color: "#1976d2", fontWeight: 'bold' }}>
                                            {card.name}

                                        </Typography>

                                        <Typography>
                                            <span style={{ color: "#1976d2", fontWeight: 'bold', fontSize: '18px' }}>
                                                No.of opeartion:</span>{card.opeartion}
                                            <VaccinesIcon sx={{ pt: 0.5, ml: 2 }} />
                                            <br />
                                            <span style={{ color: "#1976d2", fontWeight: 'bold', fontSize: '18px' }}>Days:</span>{card.Days}
                                            <TodayIcon sx={{ pt: 0.5, ml: 2 }} />
                                            <br />
                                            <span style={{ color: "#1976d2", fontWeight: 'bold', fontSize: '18px' }}>OPD Timing:</span>{card.timing}
                                            <AccessTimeIcon sx={{ pt: 0.5, ml: 2 }} />
                                            <br />
                                            <span style={{ color: "#1976d2", fontWeight: 'bold', fontSize: '18px' }}>Specialization:</span>{card.specialization}
                                            <HealingIcon sx={{ pt: 0.5, ml: 2 }} />
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

                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}

