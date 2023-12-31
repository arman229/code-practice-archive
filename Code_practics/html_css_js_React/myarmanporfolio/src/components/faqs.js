import React from 'react';
import FAQ from 'react-faq-component';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const data = {
    title: 'Frequently Asked Questions',
    rows: [  {
        title: '1. What is your background and experience as a front-end developer? ',
        content: ' I bring a unique blend of mathematical expertise and over 1 year of experience in front-end development to the table. My journey as a front-end developer has allowed me to merge analytical thinking from my mathematical background with creative problem-solving in web development.',
    },
        {
            title: '2. What inspired you to pursue a career in web development? ',
            content: '  My journey into web development was inspired by my fascination with the marriage of mathematics and technology. I saw web development as the perfect canvas to apply mathematical logic to create intuitive and user-friendly digital experiences.',
        },


        {
            title: '3. How do mathematics and web development intersect in your work?',
            content: ' My mathematical background enhances my problem-solving skills and logical thinking, which are valuable assets in web development. I often use mathematical concepts when optimizing algorithms, designing data structures, and solving complex coding challenges.',
        },
        {
            title: '4. Are you open to collaborating on projects that involve mathematical modeling or data analysis? ',
            content: 'Absolutely. I welcome opportunities to apply my mathematical expertise to projects that require data modeling, statistical analysis, or mathematical simulations. Please feel free to reach out if you have such projects in mind. ',
        },
        {
            title: '5. Can you explain the importance of mathematics in web development? ',
            content: ' Mathematics underpins various aspects of web development, from algorithms for search functionality to calculations for responsive design. It plays a crucial role in ensuring the efficiency, accuracy, and reliability of web applications.',
        },
        {
            title: '6. How can mathematical thinking benefit problem-solving in software development? ',
            content: 'Mathematical thinking involves breaking down complex problems into manageable steps, which aligns with the problem-solving approach in software development. It helps in creating well-structured, optimized code.\n'
                 ,
        },


        {
            title: ' 7. Are you open to new job opportunities or freelance projects?',
            content: ' Absolutely, I am open to exploring new job opportunities and taking on freelance projects that align with my skills and interests. I thrive on tackling unique challenges and contributing to innovative projects. ',
        },
        {
            title: '8. What programming languages and technologies are you proficient in?',
            content: ' I am proficient in HTML, CSS, and JavaScript, the core technologies of front-end development. Additionally, I have hands-on experience with modern front-end libraries and frameworks such as React, which allows me to build dynamic and responsive web applications. ',
        },
        {
            title: '9. Do you have experience with specific front-end frameworks (e.g., React, Angular, Vue.js)?',
            content: ' Yes, I have considerable experience working with React, a versatile front-end library. My projects have included creating interactive user interfaces, implementing complex features, and optimizing performance using React. ',
        },


    ],
};

const FAQSection = () => {
    return (

        <div id={'faq'} style={{backgroundColor: '#333', color: '#fff'}}>
        <Container maxWidth="md" data-aos="fade-left"     style={{ backgroundColor: '#333', color: 'red !important',  paddingTop: '30px',paddingBottom:"60px", borderRadius: '5px',   }}>

            <FAQ data={data}
                 styles={{
                     bgColor: "#333",
                     titleTextColor: "#fff",
                     rowTitleColor: "#fff",
                     rowTitleTextSize: '1rem',
                     rowContentColor: "#fff",
                     rowContentTextSize: '1rem',

                   rowContentPaddingLeft: '30px',
                      rowContentPaddingRight: '20px',
                     arrowColor: "#fff",
                 }} />
        </Container>
        </div>
    );
};

export default FAQSection;
