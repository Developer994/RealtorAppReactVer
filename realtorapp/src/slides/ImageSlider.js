import React, { useState } from 'react';
// import slides from './Slides';
import '../slides/styles.css';
import slides from './Slides';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    boxShadow: '0 0 20px 1px black',
    backgroundImage: `url(${slides[currentIndex].image})`,
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '110%',
    transform: 'translate(0, -50%)',
    left: '28px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '110%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const stylesBullet = {
    margin: '0',
    cursor: 'pointer',
    fontSize: '30px',
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const changeSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const currentImageNumber = currentIndex + 1;

  return (
    <div style={sliderStyles}>
      <div
        className='leftArrowDiv'
        style={leftArrowStyles}
        onClick={goToPrevious}
      >
        <button className='leftArrow'></button>
      </div>
      <div
        className='rightArrowDiv'
        style={rightArrowStyles}
        onClick={goToNext}
      >
        <button className='rightArrow'></button>
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={stylesBullet}
            onClick={function dot() {
              changeSlide(slideIndex);
            }}
          >
            <li className='list'></li>
          </div>
        ))}
      </div>{' '}
      <li className='imageNumber'>House {currentImageNumber}</li>
    </div>
  );
};

export default ImageSlider;
