import {MainPage} from "./components/MainPage";
import {PropertyDetail} from "./components/PropertyDetail";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/detail" element={<PropertyDetail/>}/>
            </Routes>
        </Router>
    );
}

export default App;
