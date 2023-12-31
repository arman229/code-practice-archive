import React from "react";
import './header.css';
import {
    AppBar,
    Button,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem, ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import { GiCandleFlame } from "react-icons/gi";
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import birthday from './image/birthday.jpeg'


const AppBarExample = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <AppBar position="fixed"  >
            <Toolbar style={{backgroundColor:"#000000"}}>
                <div className={'title'}>
                    {/*<IconButton edge="start" color="inherit" aria-label="menu">*/}
                    {/*    <img*/}
                    {/*        src={birthday}*/}
                    {/*        style={{ height: "40px", width: "40px", borderRadius: "40%", padding: "5px" }}*/}
                    {/*    />*/}
                    {/*</IconButton>*/}

                    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'


    }}>
                        <span
                            style={{fontSize: '1.9rem',color:"blue"}
                        } ><GiCandleFlame/></span>
                        <h1  style={{fontWeight:"600", fontSize:"1.2rem"}} >Portfolio</h1>
                    </div>

                    {/*<Typography variant="h6">Portfolio</Typography>*/}
                </div>
                <div className={'links'}>
                    <Hidden smDown>
                        <Button
                            className={'linkButton'}
                            startIcon={<MailIcon />}
                            color="inherit"
                            href="mailto:armanashraf015@gmail.com"
                        >
                            Mail
                        </Button>
                        <Button
                            className={'linkButton'}
                            startIcon={<GitHubIcon />}
                            color="inherit"
                            href="https://github.com/arman229"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </Button>
                        <Button
                            className={'linkButton'}
                            startIcon={<LinkedInIcon />}
                            color="inherit"
                            href="https://www.linkedin.com/in/arman-ashraf-427951219"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </Button>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
                            <List>
                                <ListItem button component="a" href="mailto:armanashraf015@gmail.com">
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Mail" />
                                </ListItem>
                                <ListItem
                                    button
                                    component="a"
                                    href="https://github.com/arman229"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemIcon>
                                        <GitHubIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="GitHub" />
                                </ListItem>
                                <ListItem
                                    button
                                    component="a"
                                    href="https://www.linkedin.com/in/arman-ashraf-427951219"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemIcon>
                                        <LinkedInIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="LinkedIn" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </Hidden>
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default AppBarExample;
