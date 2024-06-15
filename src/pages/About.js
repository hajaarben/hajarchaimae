import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
    return (
        <Layout>
            <Box
                sx={{
                    my: 15,
                    textAlign: "center",
                    p: 2,
                    "& h4": {
                        fontWeight: "bold",
                        my: 2,
                        fontSize: "2rem",
                    },
                    "& p": {
                        textAlign: "justify",
                    },
                    "@media (max-width:600px)": {
                        mt: 0,
                        "& h4 ": {
                            fontSize: "1.5rem",
                        },
                    },
                }}
            >
                <Typography variant="h4">QUI SOMMES-NOUS</Typography>
                <p>
                    Glooko améliore les résultats de santé des personnes souffrant de maladies chroniques grâce à sa plateforme de soins personnalisée, intelligente et connectée.

                    Nos technologies éprouvées améliorent la vie des patients en révolutionnant le lien entre les patients et les prestataires de soins, en favorisant l’engagement et l’adhésion des patients via des traitements numériques et en accélérant l’exécution des essais cliniques.

                    Glooko est déployé dans le monde entier, dans plus de 30 pays et plus de 8 000 sites cliniques.
                </p>
                <br />
                <p>
                    MISSION <br/>
                    Nous améliorons la vie des personnes atteintes de maladies chroniques en les mettant en contact avec des soignants et en leur apportant les outils nécessaires pour obtenir des résultats positifs en matière de santé, un meilleur accès aux soins, une satisfaction accrue et des coûts réduits
                </p>

            </Box>
        </Layout>
    );
};

export default About;