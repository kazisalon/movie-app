import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie/Movie';
import './Main.css';
import { fetchMovies } from '../../Store/actions/fetchingActions';

class Main extends Component {
  componentDidMount() {
    this.props.downloadMovies();
  }

  render() {
    const { error, loading, items } = this.props;
    if (error) {
      return (
        <div className="main-error">
          <div>
              Error!
            {error}
          </div>
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
        id={film.id}
        title={film.title}
        overview={film.overview}
        poster={film.poster_path}
        rank={film.vote_average}
      />
    ));

    return (
      <main className="main-wrapper">
        <ul className="movies-list">{films}</ul>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  items: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

const mapDispatchToProps = dispatch => ({
  downloadMovies: () => {
    dispatch(fetchMovies());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
