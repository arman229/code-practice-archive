

import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (

        <footer id={'footer'} style={{ backgroundColor: '#000000', color: '#fff',   }}>
            <Container maxWidth="lg"         >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2">
                            <Link href="mailto:armanashraf015@gmail.com">
                                <MailOutlineIcon style={{ marginRight: '8px' }} />
                                Email
                            </Link>
                        </Typography>

                        <Typography variant="body2">
                            <Link component="a"
                                  href="https://github.com/arman229"
                                  target="_blank"
                                  rel="noopener noreferrer">
                                <GitHubIcon  style={{ marginRight: '8px' }} />

                              GitHub


                            </Link>
                        </Typography>

                        <Typography variant="body2">
                            <PhoneIcon style={{ marginRight: '8px' }} />
                            Phone: +92 3021636805
                        </Typography>
                        <Typography variant="body2">
                            <LocationOnIcon style={{ marginRight: '8px' }} />
                            Location: Sialkot,Pakistan
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Links
                        </Typography>
                        <Typography variant="body2">
                            <Link   component="a"   href={"#mybio"}>About Us</Link>

                        </Typography>

                        <Typography variant="body2">
                            <Link component="a"   href={"#mainpage"}>Portfolio</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link component="a"   href={"#footer"}>Contact</Link>
                        </Typography>
                        <ListItem
                            button

                        >
                            <ListItemIcon>

                            </ListItemIcon>

                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Resources
                        </Typography>

                        <Typography variant="body2">
                            <Link component="a"   href={"#faq"}>FAQs</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Social
                        </Typography>
                        <Typography variant="body2">
                            <Link href="https://www.linkedin.com/in/arman-ashraf-427951219" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ marginRight: '8px' }} />
                                LinkedIn
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()}   All rights reserved.
                    </Typography>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
