import {Box} from "@mui/system";
import {Avatar, Grid, Typography} from "@mui/material";
import React, {useRef} from "react";
import {useEffect} from "react";
import myimage from "../images/myimage1.jpg"

import Typewriter from "typewriter-effect";
import {ParticleApp} from "../ParticleApp";

const styles = {
    container:
        {
            height: "100vh", display: "flex",
            justifyContent: 'center',
            alignItems: "center",


            positon: "relative"
        },
    avatar: {
        textAlign: "center",

        display: "flex",
        justifyContent: "center",
        width: '150px',
        height: '150px',
        margin: '8px',
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        textTransform: 'uppercase',
    },
    typedContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",

        flexDirection: "column",
        textAlign: "center"

    },
};

export const Headersection = () => {
    const typewriterRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (typewriterRef.current) {
                typewriterRef.current
                    .typeString("Frontend Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("React.js Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
            }
        }, 3000); // Adjust the interval as needed

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (<div className={'mycontainer'} id={'mainpage'}  style={styles.container}>

        <ParticleApp/>
        <Box style={styles.typedContainer}>
            <Grid>
                <Avatar style={styles.avatar} src={myimage} alt="not shows image"/>
            </Grid>
            <Typography style={styles.title} variant="h4">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("ARMAN")
                            .start();

                    }}
                />
            </Typography>


            <Typography style={styles.subtitle} variant="h5">
                <Typewriter
                    options={{loop: true}}
                    onInit={(typewriter) => {
                        typewriterRef.current = typewriter;
                    }}
                />
            </Typography>
        </Box></div>)
}