

import { Carousel } from '@trendyol-js/react-carousel';


import React, {useState} from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';


import HTML5 from '../images/skills/html.png';
import CSS from '../images/skills/Css.png';
import  Bootstrap from '../images/skills/Bootstrap.jpeg';
import  JavaScript from '../images/skills/Js.jpeg';
import  TypeScript from '../images/skills/TypeScript.png';
import  JQuery from '../images/skills/Jquery.png';
import  Matrial_UI from '../images/skills/MatrialUi.png';

import  Reactjs from '../images/skills/React.png';
import  Github from '../images/skills/Github.png';
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
 import {titleStyle} from "./titlestyle";

const MySkills = () => {
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);
    const rootStyle = {
        backgroundColor: '#000000',
        userSelect: "none",
        color:"white"

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




    const handleHoverLeft = () => {
        setIsHoveredLeft(!isHoveredLeft);
    };
    const handleHoverRight = () => {
        setIsHoveredRight(!isHoveredRight);
    };
    const leftArrowStyle = {
        fontSize: '2rem',
        color: 'black',
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex:"3333"
    };
    const hoveredLeftArrowStyle = {
        ...leftArrowStyle,
        backgroundColor: 'black',
        color:"white"
    };
    const rightArrowStyle = {
        fontSize: '2rem',
        color: 'black',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
    };
    const hoveredRightArrowStyle = {
        ...rightArrowStyle,
        backgroundColor: 'black',
        color:"white"
    };

    return (
        <section style={rootStyle}>
            <Container maxWidth="md"    sx={{ py: 4 }}>
                <Typography variant="h4"  style={titleStyle} gutterBottom>
                    Skills
                </Typography>
                <Grid container   >
                    <Carousel show={4} slide={4}               leftArrow={<ChevronLeft style={isHoveredLeft ? hoveredLeftArrowStyle : leftArrowStyle}
                                                                                       onMouseEnter={handleHoverLeft}
                                                                                       onMouseLeave={handleHoverLeft} />}
                              rightArrow={<ChevronRight style={isHoveredRight ? hoveredRightArrowStyle : rightArrowStyle}
                                                        onMouseEnter={handleHoverRight}
                                                        onMouseLeave={handleHoverRight}  />}

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
