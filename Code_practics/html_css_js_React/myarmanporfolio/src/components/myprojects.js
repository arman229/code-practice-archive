import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import weatherimage from "../images/weather.png"
import responsivebmi from "../images/responsivebmi.png"
import agecalculator from "../images/outputimage.jpg"
import todoimage from '../images/todo-app-output.PNG'
import {titleStyle} from "./titlestyle";

const cards = [
    {id:"0",
        image:weatherimage,
        heading: "Weather Web App",
        detail: "A compilation of my weather web app projects exemplifying innovation and skill.",
        demo: "https://weatherinfo24.netlify.app/",
        github: "https://github.com/arman229/Weather-app"

    },
    {id:"1",
        image:responsivebmi,
        heading: "BMI Calculator",
        detail: "A compilation of my BMI calculator projects exemplifying technical prowess and user-focused development.",
        demo: "https://bmicalculator-arman.netlify.app/",
        github: "https://github.com/arman229/CalculateBMI.git"

    },
    {id:"2",
        image:agecalculator,
        heading: "Web Design Portfolio",
        detail: "A collection of my web design projects showcasing creativity and expertise.",
        demo: "https://findbirthdayandage.netlify.app",
        github: "https://github.com/arman229/Find-Birthday-And-Age"

    },
    {id:"3",
        image:todoimage,
        heading: "To Do App",
        detail: "A collection of my web design projects showcasing creativity and expertise.",
        demo: "https://todo-responsive-app.netlify.app/",
        github: "https://github.com/arman229/ToDoTracker.git"

    },


];




export default function MyProjects() {

    return (






            <div style={{ backgroundColor: '#333', color: '#fff',   }}>


                <Container      data-aos="fade-left"
                  sx={{ py: 4 }}
                    maxWidth="md">
                    <Typography variant="h4" gutterBottom  style={titleStyle}
                                 >
                         Projects
                    </Typography>
                    <Grid container spacing={4}>
                        {cards.map((item) => (
                            <Grid item key={item.id} xs={12} sm={6} md={6}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{

                                            pt: '56.25%',
                                        }}
                                        image={item.image}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.heading}
                                        </Typography>
                                        <Typography>
                                            {item.detail}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a href={item.demo} target="_blank" rel="noopener noreferrer">
                                            <Button size="small" variant="contained">
                                                Live Demo
                                            </Button>
                                        </a>
                                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                                            <Button size="small">
                                                Source Code
                                            </Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>

    );
}

