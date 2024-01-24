import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarouselComponent from './components/Main/Carousel';
import ErrorBoundary from './components/Main/ErrorBoundary';
import PreFooter from './components/Main/PreFooter';
import RecommendationCard from './components/Main/RecommendationCard';

function Main() {
  return (
    <div className="Main">
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

export default Main;
