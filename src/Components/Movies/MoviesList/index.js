/* eslint-disable no-nested-ternary */
// Core
import React from 'react';
// Components
import Movie from './Movie';
// Styles
import { StyledMoviesList, LoadingMessage, LoadingError } from './styles';

const MoviesList = React.memo(
  ({ movies, moviesError, moviesLoading, hangleOpenModal }) => (
    <>
      {moviesLoading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : moviesError ? (
        <LoadingError>{`Error! ${moviesError}`}</LoadingError>
      ) : (
        <StyledMoviesList>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster={movie.poster_path}
              rank={movie.vote_average}
              hangleOpenModal={hangleOpenModal}
            />
          ))}
        </StyledMoviesList>
      )}
    </>
  ),
);

export default MoviesList;
