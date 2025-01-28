import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Info from './components/Info';
import Enquiries from './components/Enquiries';
import Media from './components/Media';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/info" element={<Info />} />
                <Route path="/enquiries" element={<Enquiries />} />
                <Route path="/media" element={<Media />} />
            </Routes>
        </Router>
    );
}

export default App;
