// Core
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
// Action creators
import {
  fetchNowPlayingMovies,
  fetchGenres,
  fetchMovieDetails,
} from '../../actions/fetchingActions';
// Styles
import { MoviesWrapper } from './styles';
// Components
import MoviesList from './MoviesList';
import MovieDetailsModal from './MovieDetailsModal';

const Movies = props => {
  const {
    movies,
    moviesLoading,
    moviesError,
    movieDetails,
    movieDetailsLoading,
    movieDetailsError,
    fetchNowPlayingMovies,
    fetchGenres,
    fetchMovieDetails,
  } = props;

  const [isModalOpen, toggleModal] = useState(false);

  useEffect(() => {
    fetchNowPlayingMovies();
    fetchGenres();
  }, [fetchNowPlayingMovies, fetchGenres]);

  const hangleOpenModal = useCallback(
    id => {
      fetchMovieDetails(id);
      toggleModal(true);
    },
    [fetchMovieDetails],
  );

  const formatedMovieDetailsGenres = useMemo(
    () => (movieDetails.genres ? movieDetails.genres.map(genre => genre.name) : []),
    [movieDetails.genres],
  );

  return (
    <MoviesWrapper>
      <MoviesList
        movies={movies}
        moviesLoading={moviesLoading}
        moviesError={moviesError}
        hangleOpenModal={hangleOpenModal}
      />
      <MovieDetailsModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        movieGenres={formatedMovieDetailsGenres}
        details={movieDetails}
        loading={movieDetailsLoading}
        error={movieDetailsError}
      />
    </MoviesWrapper>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  moviesLoading: state.movies.loading,
  moviesError: state.movies.error,
  movieDetails: state.movieDetails.details,
  movieDetailsLoading: state.movieDetails.loading,
  movieDetailsError: state.movieDetails.error,
});

export default connect(
  mapStateToProps,
  { fetchNowPlayingMovies, fetchGenres, fetchMovieDetails },
)(Movies);
