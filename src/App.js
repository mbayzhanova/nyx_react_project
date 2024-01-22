import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarouselComponent from './components/Main/Carousel';
import ErrorBoundary from './components/Main/ErrorBoundary';
import PreFooter from './components/Main/PreFooter';
import RecommendationCard from './components/Main/RecommendationCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <CarouselComponent/>
      </ErrorBoundary>
      <RecommendationCard />
      <PreFooter />
      <Footer />

    </div>
    
  );
}

export default App;
