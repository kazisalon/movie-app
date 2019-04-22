import React from 'react';
import './Movie.css';
import Img from 'react-image';
import Loader from 'react-loader-spinner';
import FallbackImg from '../../FallbackImg';

const Movie = (props) => {
  const {
    poster, id, title, rank, overview,
  } = props;
  const FALLBACK_IMG = 'https://image.tmdb.org/t/p/w200/xPu5camdNW7ga5QeHGJhiMbQ62B.jpg';
  const url = poster
    ? `https://image.tmdb.org/t/p/w200/${poster}`
    : FALLBACK_IMG;
  return (
    <li className="movie-wrapper">
      <a
        href={`https://www.themoviedb.org/movie/${id}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to movie description on movieDB site"
      >
        <Img
          className="movie-poster"
          src={url}
          alt={title}
          loader={(
            <Loader
              type="Triangle"
              color="rgba(245, 245, 245, 0.9)"
              height={100}
              width={100}
            />
          )}
          // second fallback img
          unloader={<FallbackImg />}
        />
      </a>
      <div className="movie-info">
        <div>
          <a
            href={`https://www.themoviedb.org/movie/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to movie description on movieDB site"
          >
            <span className="movie-title">{title}</span>
          </a>
          <span className="movie-rank">
            <span>IMDb</span>
            <i className="fas fa-star" />
            <span className="movie-rank-number">{rank}</span>
          </span>
        </div>
        <span>{overview}</span>
      </div>
    </li>
  );
};

export default Movie;
