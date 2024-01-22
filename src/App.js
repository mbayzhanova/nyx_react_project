import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarouselComponent from './components/Main/Carousel';
import ErrorBoundary from './components/Main/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <CarouselComponent/>
      </ErrorBoundary>
      <Footer />

    </div>
    
  );
}

export default App;
