import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../Store/actions/moviesActions';
import Movie from './Movie/Movie';
import './Main.css';

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const { error, loading, items } = this.props;

    if (error) {
      return (
        <div className="main-wrapper">
          <div>
            Error!
            {error.message}
          </div>
          ;
        </div>
      );
    }

    if (loading) {
      return (
        <div className="main-wrapper">
          <div className="loading">Loading...</div>
        </div>
      );
    }

    const films = items.map(film => (
      <Movie
        key={film.id}
        title={film.title}
        overview={film.overview}
        poster={film.poster_path}
        rank={film.vote_average}
      />
    ));
    return (
      <div className="main-wrapper">
        <ul className="movies-list">{films}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps)(Main);
