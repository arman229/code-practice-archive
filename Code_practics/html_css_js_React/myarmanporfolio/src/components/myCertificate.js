import React,{useState} from 'react';

import { Carousel } from '@trendyol-js/react-carousel';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';

import {
    Container,
    Typography,
    Grid,
    Paper,
} from '@mui/material';
import metafront from '../components/headerfooter/image/mycertificat/metafront.PNG';
import ai from '../components/headerfooter/image/mycertificat/ai.PNG';
import googleCloudPNG from '../components/headerfooter/image/mycertificat/googleCloudPNG.PNG';
import problemsolvin from '../components/headerfooter/image/mycertificat/problemsolvin.PNG';
import {titleStyle} from "./titlestyle";

const CertificatesSection = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);
    const certificates = [
        {
            title: 'Meta Front-End Developer',
            issuer: 'coursera',

            image: metafront,
            link: 'https://www.coursera.org/account/accomplishments/professional-cert/WGYV6H7JU6R2',
        },
        {
            title: 'AI For Everyone',
            issuer: 'coursera',

            image: ai,
            link: 'https://www.coursera.org/account/accomplishments/verify/DGR6855NSVRS',
        },
        {
            title: 'Introduction to Generative AI',
            issuer: 'coursera',

            image: googleCloudPNG,
            link: 'https://www.coursera.org/account/accomplishments/verify/JSABU3F2YMPH',
        },
        {
            title: 'Problem Solving Using Computational  ',
            issuer: 'coursera',

            image: problemsolvin,
            link: 'https://coursera.org/verify/7N7ZTGRCFA76',
        },

    ];

    const gridItemStyle = {
        textAlign: 'center',
        padding: '16px',


    };

    const paperStyle = {
        padding :"8px",
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };


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
        left: '14px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex:"3333",

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
        right: '14px',
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
        <div style={{ backgroundColor: '#333', color: '#fff',   }}>      <section style={{
            padding: '32px 0',
            userSelect: "none" }}   sx={{

            py: 4,

        }}>
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom style={titleStyle}
                >
                    Certificates
                </Typography>
                <Grid container spacing={2}  >

                    <Carousel
                        swiping={true}
                        infinite={true}
                        autoSwipe={3000}
                        show={isSmallScreen ? 1 : 2}
                        slide={isSmallScreen ? 1 : 2}
                        leftArrow={<ChevronLeft style={isHoveredLeft ? hoveredLeftArrowStyle : leftArrowStyle} onMouseEnter={handleHoverLeft} onMouseLeave={handleHoverLeft} />}
                        rightArrow={<ChevronRight style={isHoveredRight ? hoveredRightArrowStyle : rightArrowStyle} onMouseEnter={handleHoverRight} onMouseLeave={handleHoverRight} />}
                    >
                        {certificates.map((certificate, index) => (
                            <Grid style={gridItemStyle} key={index}    >
                                <Paper style={paperStyle}>
                                    <img src={certificate.image} alt={certificate.title} style={{ maxWidth: '100%' }} />
                                    <Typography variant="h6" gutterBottom>
                                        {certificate.title}
                                    </Typography>
                                    <Typography variant="" color="textSecondary">
                                        Issued by {certificate.issuer}
                                    </Typography>
                                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                        View Certificate
                                    </a>
                                </Paper>
                            </Grid>
                        ))}

                    </Carousel>



                </Grid>
            </Container>
        </section>
        </div>


    );
};

export default CertificatesSection;
