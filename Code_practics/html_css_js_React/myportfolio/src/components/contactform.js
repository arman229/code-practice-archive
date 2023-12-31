import React from 'react';
import image from '../images/weather.png'
import {
    Container,
    Typography,
    Grid,
    Paper,
    TextField,
    Button,
} from '@mui/material';

const ContactAndLocation = () => {
    return (
        <section style={{ backgroundColor: '#f0f0f0', padding: '32px 0' }}>
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom marginBottom={6}
                borderBottom={2}>
                    Contact Me
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <form action="YOUR_FORMSPREE_ENDPOINT" method="POST">
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    required
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    size="large"
                                >
                                    Send
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h5" gutterBottom>
                                My Location
                            </Typography>
                            <a className="p-2" href="http://www.maplandia.com/pakistan/punjab/" target="_blank" rel="noopener noreferrer">
                            <img src={image} alt="Map" style={{ width: '100%', maxHeight: '300px' }} />

                </a>

                        </Paper>
                    </Grid>


                </Grid>
            </Container>
        </section>
    );
};

export default ContactAndLocation;
