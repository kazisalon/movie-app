import React from 'react';
import fallback from '../img/FallbackImg.jpg';

const FallbackImg = () => (
  <img src={fallback} className="movie-poster" alt="fallback" />
);

export default FallbackImg;
