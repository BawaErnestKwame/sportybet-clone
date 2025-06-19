import React, { useEffect, useState } from 'react';

const BackgroundSlide = () => {
  const images = [
    '/slide1.png',
    '/slide2.png',
    '/slide3.png',
    '/slide4.png',
    '/slide5.png',
    '/slide6.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden w-full h-32 relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-28 object-cover flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlide;
