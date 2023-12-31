//
// import { Carousel } from '@trendyol-js/react-carousel';
//
//
// import React from 'react';
// import {
//     Container,
//     Grid,
//     Paper,
//     Typography,
// } from '@mui/material';
//
//
//   import skillImage1 from './headerfooter/image/skills/html.png';
//
//
// import skillImage2 from './headerfooter/image/skills/html.png';
// import skillImage3 from './headerfooter/image/skills/html.png';
// import {ChevronLeft, ChevronRight} from "@mui/icons-material";
//
// const SkillsSection = () => {
//     const rootStyle = {
//         backgroundColor: '#f0f0f0',
//
//     };
//
//     const skillItemStyle = {
//
//         paddingBottom:"10px",
//         paddingTop: '60px',
//
//         textAlign:"center",
//         width:"205px",
//
//
//
//
//     };
//
//     const skillImageStyle = {
//
//         height: 'auto',
//         padding:"10px"
//
//     };
//
//     const skills = [
//         { name: 'HTML5', image: skillImage1 },
//         { name: 'CSS', image: skillImage2 },
//         { name: 'Bootstrap', image: skillImage3 },
//         { name: 'JavaScript', image: skillImage1 },
//         { name: 'TypeScript ', image: skillImage2 },
//         { name: 'JQuery', image: skillImage3 },
//         { name: 'Matrial-UI', image: skillImage1 },
//         { name: 'Responsive Design', image: skillImage1 },
//         { name: 'Reactjs', image: skillImage1 },
//         { name: 'Github', image: skillImage1 },
//
//     ];
//
//
//     const leftArrowStyle = {
//         fontSize: '4rem',
//         color: 'white',
//         position: 'absolute',
//         left: 0,
//         top: '50%',
//         transform: 'translateY(-50%)',
//         cursor: 'pointer',
//         zIndex:"3333"
//     };
//
//     const rightArrowStyle = {
//         fontSize: '4rem',
//         color: 'white',
//         position: 'absolute',
//         right: 0,
//         top: '50%',
//         transform: 'translateY(-50%)',
//         cursor: 'pointer',
//     };
//
//     return (
//         <section style={rootStyle}>
//             <Container maxWidth="md">
//                 <Typography variant="h4" gutterBottom>
//                     Skills
//                 </Typography>
//                 <Grid container   >
//                     <Carousel show={4} slide={4}               leftArrow={<ChevronLeft style={leftArrowStyle} />}
//                               rightArrow={<ChevronRight style={rightArrowStyle} />}
//
//                               swiping={true} infinite={true}    autoSwipe={3500} >
//                         {skills.map((skill, index) => (
//                             <Grid item xs={12} sm={6} md={3} key={index}     >
//                                 <Paper style={skillItemStyle}  >
//                                     <img
//                                         src={skill.image}
//                                         alt={skill.name}
//                                         style={skillImageStyle}
//                                     />
//                                     <Typography variant="h6" gutterBottom>
//                                         {skill.name}
//                                     </Typography>
//
//                                 </Paper>
//                             </Grid>
//                         ))}
//                     </Carousel>
//                 </Grid>
//             </Container>
//         </section>
//     );
// };
//
// export default SkillsSection;
