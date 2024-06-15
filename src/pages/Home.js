import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/diabete-seniors.jpeg";
import "../styles/HomeStyles.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Banner2 from "../images/overhead-view-healthy-unhealthy-food-with-measuring-tape-background.jpg";
import Banner1 from "../images/close-up-doctor-with-pills-fresh-fruits.jpg";
import Banner3 from "../images/16112308.webp";

const Home = () => {
    return (
        <Layout>
            <div className="home1" style={{
                backgroundImage: `url(${Banner})`,
                backgroundSize: 'cover',  // Ajuste la taille de l'image pour couvrir tout l'élément
                backgroundPosition: 'center',  // Centre l'image horizontalement et verticalement
                backgroundRepeat: 'no-repeat'  // Empêche la répétition de l'image si elle est plus petite que l'élément
            }}>
                <div className="headerContainer1">
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
                            <span style={{color: '#013f80'}}>We care </span>about your health
                        </Typography>
                        <Typography variant="body1" component="h2" gutterBottom>
                            <span style={{color: '#013f80'}}>
                            Good health is the state of mental,<br/> physical and social well being
                            and it <br/> does not just mean absence of diseases.
                            </span>
                        </Typography>
                        {/*<Box*/}
                        {/*    component="form"*/}
                        {/*    sx={{ display: 'flex', alignItems: 'center', mt: 2 }}*/}
                        {/*    noValidate*/}
                        {/*    autoComplete="off"*/}
                        {/*>*/}
                        {/*    <TextField*/}
                        {/*        label="Your email address"*/}
                        {/*        variant="outlined"*/}
                        {/*        sx={{ mr: 1 }}*/}
                        {/*    />*/}
                        {/*    <Button variant="contained" color="primary">*/}
                        {/*        Start now*/}
                        {/*    </Button>*/}
                        {/*</Box>*/}
                        {/*<Typography variant="caption" display="block" sx={{ mt: 2 }}>*/}
                        {/*    By clicking "Start now" you agree to our{' '}*/}
                        {/*    <Link href="#" underline="always">*/}
                        {/*        Terms & Conditions*/}
                        {/*    </Link>.*/}
                        {/*</Typography>*/}
                    </Box>
                    {/*<h1>Diabetes Website</h1>*/}
                    {/*<p>Bienvenue</p>*/}
                    {/*<Link to="/menu">*/}
                    {/*    <button>Traitement</button>*/}
                    {/*</Link>*/}
                </div>
            </div>
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        display: 'flex',*/}
            {/*        flexDirection: 'column',*/}
            {/*        alignItems: 'center',*/}
            {/*        justifyContent: 'center',*/}
            {/*        minHeight: '70vh',*/}
            {/*        background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)',*/}
            {/*        textAlign: 'center',*/}
            {/*        padding: 2,*/}
            {/*        position: 'relative',*/}
            {/*        width: '100%', // Assure que la Box prend toute la largeur*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Box*/}
            {/*        sx={{*/}
            {/*            display: 'flex',*/}
            {/*            flexDirection: 'column',*/}
            {/*            alignItems: 'center',*/}
            {/*            justifyContent: 'center',*/}
            {/*            minHeight: '70vh',*/}
            {/*            background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)',*/}
            {/*            textAlign: 'center',*/}
            {/*            padding: 2,*/}
            {/*            marginTop: 1,*/}
            {/*            position: 'relative',*/}
            {/*            width: '100%', // Assure que la Box prend toute la largeur*/}
            {/*            backgroundImage: 'url("https://www.capretraite.fr/wp-content/uploads/2017/11/diabete_personnes_agees.jpg")', // Remplacez par le chemin de votre image*/}
            {/*            backgroundSize: 'cover', // Assure que l'image couvre toute la Box*/}
            {/*            backgroundPosition: 'center', // Centre l'image*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Box*/}
            {/*            sx={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: 0,*/}
            {/*                left: 0,*/}
            {/*                right: 0,*/}
            {/*                bottom: 0,*/}
            {/*                display: 'flex',*/}
            {/*                alignItems: 'center',*/}
            {/*                justifyContent: 'center',*/}
            {/*                color: 'white', // Couleur du texte pour être visible sur l'image*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <Typography variant="h4">*/}
            {/*                Votre texte ici*/}
            {/*            </Typography>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}

            {/*<div className="home" style={{backgroundImage: `url(${Banner1})`}}>*/}
            {/*    /!*<div className="headerContainer">*!/*/}
            {/*    /!*    <h1>Food Website</h1>*!/*/}
            {/*    /!*    <p>Best Food In India</p>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
            {/*<div className="home" style={{backgroundImage: `url(${Banner2})`}}>*/}
            {/*    <div className="headerContainer">*/}
            {/*        <h1>Food Website</h1>*/}
            {/*        <p>Best Food In India</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="home" style={{backgroundImage: `url(${Banner3})`}}>*/}
            {/*    <div className="headerContainer">*/}
            {/*        <h1>Food Website</h1>*/}
            {/*        <p>Best Food In India</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </Layout>
    );
};

export default Home;