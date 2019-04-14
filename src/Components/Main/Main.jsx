/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../Store/actions/moviesActions";
import Movie from "./Movie/Movie";
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/prop-types
    this.props.dispatch(fetchMovies());
  }

  render() {
    // eslint-disable-next-line react/prop-types
    console.log(`${this.props.items[0]}`);
    const { error, loading, items } = this.props;
    console.log(items);

    // if (error) {
    //   return <div>Error! {error.message}</div>;
    // }

    if (loading) {
      return <div>Loading...</div>;
    }
    console.log(items);
    console.log(items.results);

    const films = items.map((film) => {
      // properties like completed, important
      return (
        <Movie key={film.id} title={film.title} overview={film.overview} poster={film.poster_path} rank={film.vote_average} />
      );
    });
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
