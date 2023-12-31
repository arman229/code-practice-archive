import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {titleStyle} from "./titlestyle";

const experienceStyle = {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: '.6rem',borderRadius:"0px"
};





const Experience = () => {
    return (
        <Paper    sx={experienceStyle}>
            <Container maxWidth="md"      data-aos="fade-right">
                <Typography  variant="h4"  gutterBottom style={titleStyle}>
                    Professional Experience
                </Typography>
                <section>
                    <div className="experience-item">
                        <Typography variant="subtitle1">Front-End Developer (Self-Employed)</Typography>
                        <Typography>
                            <em>Self-Employed</em> | <em>06/2022 - Ongoing</em>
                        </Typography>
                        <Typography variant={'body1'} style={{ marginBottom: '.6rem',}}>
                            <strong>Description:</strong> As a self-employed front-end developer, I worked on a variety of web development projects, focusing on creating responsive and visually appealing websites. I collaborated with clients to understand their requirements and deliver tailored solutions.
                        </Typography>
                        <Typography>
                            <strong>Key Responsibilities:</strong>
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Developed and maintained responsive websites for various clients." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Utilized HTML, CSS, and JavaScript to implement interactive and user-friendly features." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Collaborated with designers and back-end developers to ensure seamless integration." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Managed project timelines and client expectations to meet delivery deadlines." />
                            </ListItem>
                        </List>

                    </div>
                </section>
            </Container>
        </Paper>
    );
};

export default Experience;
