// src/App.js
import React from 'react';
import GuitarAnimation from './GuitarAnimation';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Your Electric Guitar</h1>
          <p className="text-lg md:text-xl mb-6">Explore premium guitar lessons and setup services.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">
              Electric Guitar Lessons
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">
              Electric Guitar Setup
            </button>
          </div>
        </div>
        {/* 3D Guitar Animation */}
        <GuitarAnimation />
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-800 text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Electric Guitar Lessons</h2>
            <p className="mb-4">Comprehensive lessons tailored to all skill levels. Start learning today.</p>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Electric Guitar Setup</h2>
            <p className="mb-4">Professional guitar setup services for the perfect sound.</p>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
