import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from './assets/plane1.jpg'
import img2 from './assets/plane2.jpg'
import img3 from './assets/plane3.jpeg'
import './Slider.css'

const Slider = () => {
  return (
    <Carousel autoPlay={5000} infinite animationSpeed={1000} > 
    <img className="slider" src={img1} />
    <img className="slider" src={img2} />
    <img className="slider" src={img3} />
  </Carousel>

  )
}

export default Slider


