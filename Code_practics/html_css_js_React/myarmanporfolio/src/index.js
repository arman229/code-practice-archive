import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import AppBarExample from "./components/headerfooter/header";
import Album from "./components/myprojects";
import CertificatesSection from "./components/myCertificate";
import MySkills from  './components/myfavskills'
import MyProjects from "./components/myprojects";

import {Headersection} from "./components/mainpage";
import CustomizedTimeline from "./components/myEducation";
import Footer from "./components/footer";
import {MyBio} from "./components/MyBio";
import Experience from "./components/myexperience";

import MyAchievements from "./components/academicAchivement";
import Blog from "./components/myblog";
import FAQSection from "./components/faqs";








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppBarExample/>

        <Headersection/>


        <MyBio/>
        <Experience/>
        <MySkills/>
<MyProjects/>


<CustomizedTimeline/>

        <CertificatesSection/>
        <MyAchievements/>

        <FAQSection/>
        {/*/!*<ContactAndLocation/>*!/*/}
        {/*<Myfooter/>*/}
        {/*<BasicTimeline/>*/}
            <Footer/>
    </React.StrictMode>
);

reportWebVitals();
