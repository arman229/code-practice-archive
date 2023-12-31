

import { Carousel } from '@trendyol-js/react-carousel';


import React from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';


import HTML5 from '../src/components/headerfooter/image/skills/html.png';
import CSS from '../src/components/headerfooter/image/skills/Css.png';
import  Bootstrap from '../src/components/headerfooter/image/skills/Bootstrap.jpeg';
import  JavaScript from '../src/components/headerfooter/image/skills/Js.jpeg';
import  TypeScript from '../src/components/headerfooter/image/skills/TypeScript.png';
import  JQuery from '../src/components/headerfooter/image/skills/Jquery.png';
import  Matrial_UI from '../src/components/headerfooter/image/skills/MatrialUi.png';

import  Reactjs from '../src/components/headerfooter/image/skills/React.png';
import  Github from '../src/components/headerfooter/image/skills/Github.png';
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

const MySkills = () => {
    const rootStyle = {
        backgroundColor: '#f0f0f0',
        userSelect: "none"

};

    const skillItemStyle = {

        paddingBottom:"10px",
        paddingTop: '60px',

         textAlign:"center",
        width:"205px",




    };

    const skillImageStyle = {

        height: '70px',
        padding:"10px"

    };

    const skills = [
        { name: 'HTML5', image: HTML5 },
        { name: 'CSS', image: CSS },
        { name: 'Bootstrap', image: Bootstrap },
        { name: 'JavaScript', image: JavaScript },
        { name: 'TypeScript ', image: TypeScript },
        { name: 'JQuery', image: JQuery },
        { name: 'Matrial-UI', image: Matrial_UI },

        { name: 'Reactjs', image: Reactjs },
        { name: 'Github', image: Github },

    ];

    const leftArrowStyle = {
        fontSize: '4rem',
        color: 'white',
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex:"3333"
    };

    const rightArrowStyle = {
        fontSize: '4rem',
        color: 'white',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
    };

    return (
        <section style={rootStyle}>
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    Skills
                </Typography>
                <Grid container   >
                    <Carousel show={4} slide={4}               leftArrow={<ChevronLeft style={leftArrowStyle} />}
                              rightArrow={<ChevronRight style={rightArrowStyle} />}

                    swiping={true} infinite={true}    autoSwipe={3500} >
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}     >
                            <Paper style={skillItemStyle}  >
                             <img
                                    src={skill.image}
                                    alt={skill.name}
                                    style={skillImageStyle}
                                />
                                <Typography variant="h6" gutterBottom>
                                    {skill.name}
                                </Typography>

                            </Paper>
                        </Grid>
                    ))}
                    </Carousel>
                </Grid>
            </Container>
        </section>
    );
};

export default MySkills;
