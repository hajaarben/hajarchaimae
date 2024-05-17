import React from 'react';
import Layout from "./../components/Layout/Layout";
import { Box, Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import MicIcon from '@mui/icons-material/Mic';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Assurez-vous que le chemin de l'image est correct
import doctorImage from '../images/9686354-removebg.png';  // Ajustez ce chemin en fonction de votre projet

const Acceuil = () => {
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
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        <span style={{ color: '#1976d2' }}>One Step Solution</span>
                        <br />
                        for all your dietary needs.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Using your BMI index we calculate whether the dish is suitable for you.
                    </Typography>
                    {/*<Box*/}
                    {/*    sx={{*/}
                    {/*        display: 'flex',*/}
                    {/*        alignItems: 'center',*/}
                    {/*        mt: 2,*/}
                    {/*        width: '100%',*/}
                    {/*        backgroundColor: '#fff',*/}
                    {/*        borderRadius: '25px',*/}
                    {/*        boxShadow: 1,*/}
                    {/*        p: 1,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <TextField*/}
                    {/*        placeholder="Search your product"*/}
                    {/*        variant="outlined"*/}
                    {/*        fullWidth*/}
                    {/*        InputProps={{*/}
                    {/*            startAdornment: (*/}
                    {/*                <InputAdornment position="start">*/}
                    {/*                    <IconButton>*/}
                    {/*                        <SearchIcon />*/}
                    {/*                    </IconButton>*/}
                    {/*                </InputAdornment>*/}
                    {/*            ),*/}
                    {/*            endAdornment: (*/}
                    {/*                <InputAdornment position="end">*/}
                    {/*                    <IconButton>*/}
                    {/*                        <ImageIcon />*/}
                    {/*                    </IconButton>*/}
                    {/*                    <IconButton>*/}
                    {/*                        <MicIcon />*/}
                    {/*                    </IconButton>*/}
                    {/*                </InputAdornment>*/}
                    {/*            ),*/}
                    {/*            sx: {*/}
                    {/*                borderRadius: '25px',*/}
                    {/*            },*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</Box>*/}
                </Box>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <img src={doctorImage} alt="Doctor" style={{ maxWidth: '150%', height: 'auto', borderRadius: '15px' }} />
                </Box>
            </Box>
        </Box>
        </Layout>
    );
};

export default Acceuil;
