import { Paper, Box, Typography, TextField } from "@mui/material";
import React from "react";

function Item({item})
{
    return (
        <Paper style={{display: 'flex', alignItems: 'center', padding: '38px'}}>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h3" component="h1" gutterBottom style={{ fontSize: '40px', color: "text.primary" }}>
                    {item.title}
                </Typography>
            </Box>
            <img src={item.image} alt={item.title} style={{
                width: "50%", height: "80vh", marginLeft: '16px'}}/>
        </Paper>
    );
};
export default Item;