import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {titleStyle} from "./titlestyle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";

const  MyBio=()=>{
    return(<>

        <Box id={'mybio'}  style={{  backgroundColor: '#000000',
            userSelect: "none",
            color:"white"  }}
            sx={{

                py: 4,

            }}
        >
            <Container maxWidth="md"    data-aos="fade-left" >
                <Typography
                    variant="h4" style={titleStyle}
                    gutterBottom
                >
                    MY BIO
                </Typography>

                <Typography    sx={{textAlign:" justify",  }}   variant="body1"   paragraph>
                    Hello, I'm Arman, a passionate front-end developer dedicated to crafting beautiful and intuitive web experiences.I'm a creative problem solver with a keen eye for design and a deep love for all things web development. My journey into the world of coding began with a fascination for turning ideas into interactive and visually appealing websites. Since then, I've been on an exciting adventure, constantly learning and growing in this dynamic field.





                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="end"
                >
                    <Button variant="contained">Contact Us</Button>
                    <Button variant="outlined"  >

                        {/*<a href="https://flowcv.com/resume/5bbcubptpk" download>*/}
                            Download CV
                        {/*</a>*/}
                    </Button>
                </Stack>
            </Container>
        </Box>
    </>)
}
export {MyBio}