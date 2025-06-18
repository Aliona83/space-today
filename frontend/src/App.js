import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ApodViewer from './components/ApodViewer';
import AsteroidTable from './components/AsteroidTable'; 
import AsteroidsCharts from './components/AsteroidsCharts';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ApodViewer />} />
          <Route path="/asteroids" element={<AsteroidTable />} />
          <Route path="/charts" element={<AsteroidsCharts />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
