import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ApodViewer from './components/ApodViewer';
import AsteroidTable from './components/AsteroidTable'; 

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ApodViewer />} />
          <Route path="/asteroids" element={<AsteroidTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
