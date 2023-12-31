import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Home} from './components/home';
import {Men} from './components/men';
import {Women} from './components/women';
import {Kids} from './components/kids';
 
import {Addtocart} from './components/addtocart';
import {Contactus} from './components/contactus'
import { Myform } from './components/form';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="contactus" element={<Contactus />} />
          <Route path="kids" element={<Kids />} />
          <Route path="men" element={<Men />} />
          <Route path="myform" element={<Myform />} />
          <Route path="women" element={<Women />} />
          <Route path="addtocart" element={<Addtocart />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
