import React, { useState, useEffect } from 'react';
import './Carousel.css';

const CarouselForMobile = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsAnimating(false);
      }, 500); // match the transition duration in CSS
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  return (
    <div className="carousel-container border-t border-gray-600 mt-4 w-11/12">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Adjust for showing 3 slides at a time
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide mt-4" key={index}>
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselForMobile;
