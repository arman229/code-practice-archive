import React from "react";
import {Typography} from '@mui/material';
import {Container, Grid, Link} from '@mui/material';

const Footer = () => {
    return (

            <footer style={{backgroundColor: '#3f51b5', color: "white", padding: '20px 0'}}>
                <Container maxWidth="lg" >
                    <Grid container justifyContent="space-between">
                        <Grid item sm={6} xs={12}>
                            <Typography variant="body2" textAlign={{xs: 'center', sm: 'left'}}>
                                &copy; {new Date().getFullYear()} calculator Website. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography variant="body2" textAlign={{xs: 'center', sm: 'right'}}>
                                Designed and developed by{' '}
                                <Link href="https://www.portfolioarman" target="_blank" rel="noopener"
                                      style={{color: "white", fontSize: "1.2em", borderBottom: "2px solid white"}}>
                                    ARMAN
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </footer>

    );
};

export default Footer;


export {Footer};
