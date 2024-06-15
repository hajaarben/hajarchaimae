import React from 'react';
import Layout from "./../components/Layout/Layout";
import { Box, Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import MicIcon from '@mui/icons-material/Mic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";

// Assurez-vous que le chemin de l'image est correct
import doctorImage from '../images/diabete_personnes_agees-removebg-preview.png';  // Ajustez ce chemin en fonction de votre projet

const Department = () => {
    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)',
                    textAlign: 'center',
                    padding: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    {/*<Typography variant="h6" component="span" sx={{ mr: 1 }}>*/}
                    {/*    Health Matters*/}
                    {/*</Typography>*/}
                    {/*<FavoriteIcon color="error" />*/}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        maxWidth: '900px',
                        textAlign: 'left',
                    }}
                >
                    <Box sx={{flex: 1}}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            <span style={{color: '#1976d2'}}>One Step Solution</span>
                            <br/>
                            for all your dietary needs.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Using your BMI index we calculate whether the dish is suitable for you.
                        </Typography>
                        <div className="headerContainer">
                            <Link to="/menu">
                                <button>CHECK</button>
                            </Link>
                        </div>
                    </Box>
                    <Box sx={{flex: 1, display: 'flex', alignItems: 'center', marginLeft:15}}>
                        <img src={doctorImage} alt="Doctor"
                             style={{maxWidth: '150%', height: 'auto', borderRadius: '30px'}}/>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default Department;
