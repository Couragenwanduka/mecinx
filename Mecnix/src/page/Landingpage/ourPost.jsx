import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  return (
    <div className="flex w-80  ml-30">
      <div className="slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide} alt={`Slide ${index}`} className='p-2' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
