import React from 'react';
import fallback from '../FallbackImg.jpg';

const FallbackImg = () => (
  <img src={fallback} className="movie-poster" alt="fallback" />
);

export default FallbackImg;
