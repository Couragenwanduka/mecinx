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
    // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    <div className="flex w-96 ml-10">
      <div className="slides-container">
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
