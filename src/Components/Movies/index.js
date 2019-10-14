// Core
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Action creators
import { fetchNowPlayingMovies, fetchGenres } from '../../actions/fetchingActions';
import { fetchMovieDetails } from '../../actions/fetchingActions';
// Styles
import { MoviesWrapper, MoviesList, LoadingMessage, LoadingError } from './styles';
// Components
import Movie from './Movie';
import MovieDetailsModal from './MovieDetailsModal';

const Movies = props => {
  const {
    error,
    loading,
    movies,
    fetchNowPlayingMovies,
    fetchGenres,
    fetchMovieDetails,
  } = props;

  const [isModalOpen, toggleModal] = useState(false);

  useEffect(() => {
    fetchNowPlayingMovies();
    fetchGenres();
  }, [fetchGenres, fetchNowPlayingMovies]);

  const handleToggleModal = id => {
    fetchMovieDetails(id);
    toggleModal(true);
  };

  return (
    <MoviesWrapper>
      {loading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : error ? (
        <LoadingError>{`Error! ${error}`}</LoadingError>
      ) : (
        <>
          <MoviesList>
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster={movie.poster_path}
                rank={movie.vote_average}
                toggleModal={handleToggleModal}
              />
            ))}
          </MoviesList>
          <MovieDetailsModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
        </>
      )}
    </MoviesWrapper>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(
  mapStateToProps,
  { fetchNowPlayingMovies, fetchGenres, fetchMovieDetails },
)(Movies);
