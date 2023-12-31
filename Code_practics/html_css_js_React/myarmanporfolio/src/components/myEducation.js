import * as React from 'react';
import Typography from '@mui/material/Typography';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import SchoolIcon from '@mui/icons-material/School';
import {titleStyle} from "./titlestyle";
import Container from "@mui/material/Container";



export default function CustomizedTimeline() {


    return (
        <div style={{ backgroundColor: '#000000',
                 color:"white"  }}>
        <Container     data-aos="fade-right"
            sx={{ py: 4 }}
            maxWidth="md">
            <Typography variant="h4" gutterBottom  style={titleStyle}
            >
               Education
            </Typography>
        <Timeline position="alternate" style={{  margin:"0px"}}>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    2018/2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                      sx={{ paddingTop: 2, paddingRight: 2, paddingBottom: 5, paddingLeft: 2 }}
                    // sx={{py:12,px:2}}
                >
                    <Typography variant="h6" component="span">
                        BS Mathematics
                    </Typography>
                    <Typography>Govt Murray College, Sialkot</Typography>
                    <Typography fontWeight="bold">Grade: A</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    2018/2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent

                    sx={{ paddingTop: 5, paddingRight: 2, paddingBottom: 3, paddingLeft: 2 }}>
                    <Typography variant="h6" component="span">
                        Engineering
                    </Typography>
                    <Typography>Govt Allama Iqbal College, Sialkot</Typography>
                    <Typography fontWeight="bold">Grade: B</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
            </Container>
</div>
    );
}
