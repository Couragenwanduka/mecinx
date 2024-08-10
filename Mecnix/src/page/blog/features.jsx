import React, { useState, useEffect } from 'react';
import meeting from "../../images/image 16.png";
import mangetMan from "../../images/magnetman.png";
import meetingMobile from '../../images/mobileImage.png';
import blog from "../../images/blogimage.jpeg";

const features = [
  {
    title: "My Life",
    description: "My Life time I will give God my life time, if I give God ..",
    date: "6, August 2015",
    image: mangetMan
  },
  {
    title: "Title",
    description: "My Life time I will give God my life time, if I give God ..",
    author: "author",
    date: "6, August 2016",
    image: meeting
  },
  {
    title: "Title2",
    description: "My Life time I will give God my life time, if I give God ..",
    author: "author",
    date: "6, August 2017",
    image: meetingMobile
  },
  {
    title: "Title2",
    description: "My Life time I will give God my life time, if I give God ..",
    author: "author",
    date: "6, August 2017",
    image: blog
  }
];

const FeatureSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % features.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div
        className="absolute w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {features.map((feature, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-full">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center text-white bg-black bg-opacity-50 font-saira">
              <h2 className="text-xl font-bold mb-2 mt-40 font-saira ml-5">{feature.title}</h2>
              <p className="mb-2 font-saira ml-5">{feature.description}</p>
              <small className='ml-5'>{`${feature.author} - ${feature.date}`}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSlideshow;
