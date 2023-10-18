import React, { useState } from 'react';
import '../styles/Section3.css';
import CardSquareImage1 from '../assets/pic1.png';
import CardSquare1Image2 from '../assets/pic2.png';
import CardSquare3Image3 from '../assets/pic3.png';

const Section3 = () => {
  const slides = [
    {
      image: CardSquareImage1,
      title: 'The Olympian',
      description: 'The only athlete in the world to do her Olympic routine in 2020.',
    },
    {
      image: CardSquare1Image2,
      title: 'The Saving Jar',
      description: 'Grow your savings treasure and grow your dragon.',
    },
    {
      image: CardSquare3Image3,
      title: 'Skhokho seMali',
      description: 'Helping South Africa became #CashCleva with Skhokho and TymeBank',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="section3">
      <div className="slider-horizontal">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="image-container">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="slide-content">
                <h6>{slide.title}</h6>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
