
import { Routes, Route } from 'react-router-dom';

import { BrowserRouter as Router,  Link } from 'react-router-dom';
import {Seo_articles} from './components/seo_articles'
import {Socialpanal} from './components/socialpanal'
 import {CommingSoon} from  './components/commingsoon'
import {Myhome} from './components/home';
import {Contactus} from './components/contactus';
import {Signin} from "./components/signin";
import {Signup} from './components/signup'
import {Aboutpage} from "./components/about";
import {Disclaimer} from "./components/disclaimer";
import {Privicypolicy} from "./components/privicypolicy";
function App() {
  return (
    
 
<>
    <Router>

        <Routes>
            <Route path="/Myhome" element={<Myhome />} />
            <Route path="articles" element={<Seo_articles />} />
            <Route path="socialpanel" element={<Socialpanal />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="comingsoon" element={<CommingSoon />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />

            <Route path="aboutus" element={<Aboutpage />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="seo_articles" element={<Seo_articles />} />
            <Route path="privicypolicy" element={<Privicypolicy />} />
        </Routes>
    </Router>




</>

  );
}

export default App;
