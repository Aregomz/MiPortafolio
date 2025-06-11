import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#1B1F2B] pt-[100px]">
      <Navbar />
      <div className="container">
        {/* Aquí irá el contenido de las secciones */}
      </div>
    </div>
  );
}

export default App;
