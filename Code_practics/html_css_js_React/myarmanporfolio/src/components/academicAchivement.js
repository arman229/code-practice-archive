import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcademicAchievements from './headerfooter/image/Achivment.PNG';
import { titleStyle } from './titlestyle';

const MyAchievements = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 730);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 730);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            style={{
                backgroundColor: '#000000',
                color: 'white',
            }}
        >
            <Container
                maxWidth="md"
                style={{
                    padding: '20px',
                    borderRadius: '5px',
                }}    data-aos="fade-right"
            >
                <Typography style={titleStyle} variant="h2" component="h2" gutterBottom>
                    Academic Achievement
                </Typography>
                <List>
                    <ListItem style={{ marginBottom: '20px' }}>
                        <Card
                              style={{
                                display: 'flex',
                                alignItems: isSmallScreen ? 'flex-start' : 'center', // Align differently for small screens
                                flexDirection: isSmallScreen ? 'column' : 'row', // Flex direction condition
                                padding: '16px 16px',
                                width: '100%',
                            }}
                        >
                            <CardMedia
                                       component="img"
                                alt="Certificate Image"
                                src={AcademicAchievements}
                                style={{
                                    width: isSmallScreen ? '100%' : '380px', // Adjust width for small screens
                                    height: '250px',
                                    marginRight: isSmallScreen ? '0' : '16px', // Remove margin for small screens
                                }}
                            />
                            <CardContent  >
                                <ListItemText
                                    primary="Bachelor of Science in Mathematics"
                                    secondary={
                                        <>
                                            <strong>Institution:</strong> Govt Murray Graduate College, Sialkot
                                            <br />
                                            <strong>Year:</strong> 2023
                                            <br />
                                            <strong>Achievement:</strong> Academic Achievement
                                        </>
                                    }
                                />
                            </CardContent>
                        </Card>
                    </ListItem>
                </List>
            </Container>
        </div>
    );
};

export default MyAchievements;
