import React from "react";
import Carousel from "react-material-ui-carousel"
import Item from "./Item"
import slider from "../helper/slider.json"
import Layout from "./../components/Layout/Layout";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import Banner1 from "../images/images2.jpeg";
import Banner2 from "../images/image3.jpg";
import Banner3 from "../images/16112308.webp";

function Example()
{
    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '10vh',
                    background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)',
                    textAlign: 'center',
                    padding: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
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
                </Box>
            </Box>
            <Carousel>
                {
                    slider.map((item) => <Item key={item.id} item={item}/>)
                }
        </Carousel>
            {/*<div className="home" style={{backgroundImage: `url(${Banner3})`}}>*/}
            {/*    <div className="headerContainer">*/}
            {/*        <h1>Food Website</h1>*/}
            {/*        <p>Best Food In India</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Layout>
    );
};

export default Example;
