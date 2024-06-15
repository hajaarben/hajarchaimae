import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://mui.com/">Sitemark&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 0 },
                py: { xs: 8, sm: 6 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        <Box sx={{ ml: '-15px' }}>
                            <img
                                src={
                                    'https://www.lions103est.org/wp-content/uploads/2020/06/logo-diabetes.png'
                                }
                                style={{ width: '50px', height: "auto", "margin":"10px"}}
                                alt="logo of sitemark"
                            />
                        </Box>
                        <Typography variant="body2" fontWeight={600} gutterBottom>
                            Newsletter
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Subscribe to our newsletter for weekly updates and promotions.
                        </Typography>
                        <Stack direction="row" spacing={1} useFlexGap>
                            <TextField
                                id="outlined-basic"
                                hiddenLabel
                                size="small"
                                variant="outlined"
                                fullWidth
                                aria-label="Enter your email address"
                                placeholder="Your email address"
                                inputProps={{
                                    autoComplete: 'off',
                                    'aria-label': 'Enter your email address',
                                }}
                            />
                            <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                                Subscribe
                            </Button>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Important Links
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Health Professionals
                    </Link>
                    <Link color="text.secondary" href="#">
                        About Us
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Contact Us
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Call: (+212) 539 786 146
                    </Link>
                    <Link color="text.secondary" href="#">
                        Email: medin@gmail.com
                    </Link>
                    <Link color="text.secondary" href="#">
                        Address: 0123 Some place
                    </Link>
                    <Link color="text.secondary" href="#">
                        Some country
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}