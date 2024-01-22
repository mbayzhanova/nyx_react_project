import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
      <img className="carousel-img" alt='lll' src={require("../../assets/photos/paulasPhoto.svg")} />
      </Carousel.Item>

      <Carousel.Item>
      <img className="carousel-img" alt='lll' src={require("../../assets/photos/charlotteTilburyMain.svg")} />
      </Carousel.Item>

      <Carousel.Item>
      <img className="carousel-img" alt='lll' src={require("../../assets/photos/KikoMainPhoto.svg")} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
