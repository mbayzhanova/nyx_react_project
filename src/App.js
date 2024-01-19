import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <Carousel />
      </ErrorBoundary>
      <MainPage />
      <Footer />

    </div>
    
  );
}

export default App;
