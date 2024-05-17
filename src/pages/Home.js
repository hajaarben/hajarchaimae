import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/diabete-seniors.jpeg";
import "../styles/HomeStyles.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Home = () => {
    return (
        <Layout>
                <div className="home" style={{backgroundImage: `url(${Banner})`,
                    backgroundSize: 'cover',  // Ajuste la taille de l'image pour couvrir tout l'élément
                    backgroundPosition: 'center',  // Centre l'image horizontalement et verticalement
                    backgroundRepeat: 'no-repeat'  // Empêche la répétition de l'image si elle est plus petite que l'élément
                }}>
                    <div className="headerContainer">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '100vh',
                                // background: 'linear-gradient(to bottom, #e0f7fa, #ffffff)',
                                textAlign: 'center',
                                padding: 3,
                            }}
                        >
                            <Typography variant="h3" component="h1" gutterBottom>
                                Our latest <span style={{ color: '#1976d2' }}>products</span>
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs.
                                Elevate your experience with top-tier features and services.
                            </Typography>
                            <Box
                                component="form"
                                sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    label="Your email address"
                                    variant="outlined"
                                    sx={{ mr: 1 }}
                                />
                                <Button variant="contained" color="primary">
                                    Start now
                                </Button>
                            </Box>
                            <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                                By clicking "Start now" you agree to our{' '}
                                <Link href="#" underline="always">
                                    Terms & Conditions
                                </Link>.
                            </Typography>
                        </Box>
                        {/*<h1>Diabetes Website</h1>*/}
                        {/*<p>Bienvenue</p>*/}
                        {/*<Link to="/menu">*/}
                        {/*    <button>Traitement</button>*/}
                        {/*</Link>*/}
                    </div>
                </div>
        </Layout>
);
};

export default Home;