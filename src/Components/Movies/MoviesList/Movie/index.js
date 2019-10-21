// Core
import React from 'react';
// Components
import Img from 'react-image';
import Loader from 'react-loader-spinner';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// Styles
import {
  MovieWrapper,
  MovieTitle,
  MovieInfo,
  MoviePosterWrapper,
  MovieRank,
  MovieRankNumber,
  MovieTitleWrapper,
  MovieOverview,
  ImdbText,
  StyledFontAwesomeIcon,
} from './styles';
// Img
import FallbackImg from '../../../../img/FallbackImg/FallbackImg';

const Movie = React.memo(({ poster, id, title, rank, overview, hangleOpenModal }) => {
  const posterUrl = poster
    ? `https://image.tmdb.org/t/p/w200/${poster}`
    : 'https://image.tmdb.org/t/p/w200/xPu5camdNW7ga5QeHGJhiMbQ62B.jpg';

  return (
    <MovieWrapper>
      <MoviePosterWrapper onClick={() => hangleOpenModal(id)}>
        {/* <img className="movie-poster" src={posterUrl} alt={title}/> */}
        <Img
          className="movie-poster"
          src={posterUrl}
          alt={title}
          loader={
            <Loader
              type="Triangle"
              color="rgba(245, 245, 245, 0.9)"
              height={100}
              width={100}
            />
          }
          unloader={<FallbackImg />}
        />
      </MoviePosterWrapper>

      <MovieInfo>
        <MovieTitleWrapper onClick={() => hangleOpenModal(id)}>
          <MovieTitle>{title}</MovieTitle>

          <MovieRank>
            <ImdbText>IMDb</ImdbText>
            <StyledFontAwesomeIcon icon={faStar} />
            <MovieRankNumber>{rank}</MovieRankNumber>
          </MovieRank>
        </MovieTitleWrapper>
        <MovieOverview>{overview}</MovieOverview>
      </MovieInfo>
    </MovieWrapper>
  );
});

export default Movie;
