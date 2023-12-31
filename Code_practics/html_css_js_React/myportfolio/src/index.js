import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import AppBarExample from "./components/headerfooter/header";

import Album from "./components/myprojects";
import {Headersection} from "./components/gridsystem";


import CertificatesSection from "./components/myCertificate";



import MySkills from "./MySkills";

import BasicTimeline from "./components/myEducation";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppBarExample/>

        <Headersection/>
            <MySkills/>
        <Album/>


        <CertificatesSection/>
        {/*<ContactAndLocation/>*/}
        {/*<Myfooter/>*/}
<BasicTimeline/>
    </React.StrictMode>
);

reportWebVitals();
