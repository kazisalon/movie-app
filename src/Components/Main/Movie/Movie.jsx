import React from 'react';
import './Movie.css';
import Img from 'react-image';
import Loader from 'react-loader-spinner';

const Movie = props => (
  <li className="movie-wrapper">
    <Img
      className="movie-poster"
      src={[
        `https://image.tmdb.org/t/p/w200/${props.poster}`,
        'https://image.tmdb.org/t/p/w200/xPu5camdNW7ga5QeHGJhiMbQ62B.jpg',
      ]}
      loader={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <Loader
          type="Triangle"
          color="rgba(245, 245, 245, 0.9)"
          height={100}
          width={100}
        />
      }
    />
    <div className="movie-info">
      <div>
        <span className="movie-title">{props.title}</span>
        <span className="movie-rank">
          <span>IMDb</span>
          <i className="fas fa-star" />
          <span className="movie-rank-number">{props.rank}</span>
        </span>
      </div>
      <span className="movie-overview">{props.overview}</span>
    </div>
  </li>
);

export default Movie;
