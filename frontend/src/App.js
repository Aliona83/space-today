import React from 'react';
import ApodViewer from './components/ApodViewer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <ApodViewer />
      </div>
    </>
  );
}

export default App;
