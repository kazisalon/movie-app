import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './Filters.css';
import { fetchMovieByGenre } from '../../../Store/actions/genreActions';
import {
  fetchMoviesByPopularity,
  fetchMoviesByRating,
} from '../../../Store/actions/filterActions';
import { fetchMovieByInput } from '../../../Store/actions/inputActions';

const genreOptions = [
  { value: 28, label: 'Action' },
  { value: 12, label: 'Adventure' },
  { value: 16, label: 'Animation' },
  { value: 35, label: 'Comedy' },
  { value: 80, label: 'Crime' },
  { value: 99, label: 'Documentary' },
  { value: 18, label: 'Drama' },
  { value: 10751, label: 'Family' },
  { value: 14, label: 'Fantasy' },
  { value: 36, label: 'History' },
  { value: 27, label: 'Horror' },
  { value: 10402, label: 'Music' },
  { value: 9648, label: 'Mystery' },
  { value: 10749, label: 'Romance' },
  { value: 878, label: 'Science Fiction' },
  { value: 10770, label: 'TV Movie' },
  { value: 53, label: 'Thriller' },
  { value: 10752, label: 'War' },
  { value: 37, label: 'Western' },
];

// eslint-disable-next-line react/prefer-stateless-function
class Filters extends Component {
  handleChange = (value, action) => {
    if (action.action === 'clear') {
      const clearValue = { value: 0, label: 'Genre' };
      this.props.setGenreValue(clearValue);
    } else if (action.action === 'select-option') {
      this.props.setGenreValue(value);
    }
  };

  render() {
    const genre = genreOptions.find(o => o.value === this.props.genreId);
    return (
      <>
        <div className="filters-container">
          <div className="filter-buttons-container">
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              value={genre || null}
              isDisabled={false}
              isLoading={false}
              isClearable
              name="Genre"
              onChange={this.handleChange}
              options={genreOptions}
              placeholder="Select genre..."
            />
            <button
              className="filter-button ratting-button"
              onClick={() => this.props.fetchMoviesByRating()}
              type="button"
            >
              Rating
            </button>
            <button
              className="filter-button popularity-button"
              onClick={() => this.props.fetchMoviesByPopularity()}
              type="button"
            >
              Popularity
            </button>
          </div>

          <div className="search-wrapper">
            <form className="search-form" onSubmit={e => e.preventDefault()}>
              <input
                className="search-input"
                placeholder="Search films..."
                value={this.props.inputValue}
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = 'Search films...')}
                onChange={e => this.props.sendSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendSearchQuery: inputData => dispatch(fetchMovieByInput(inputData)),
  setGenreValue: value => dispatch(fetchMovieByGenre(value)),
  fetchMoviesByPopularity: () => dispatch(fetchMoviesByPopularity()),
  fetchMoviesByRating: () => dispatch(fetchMoviesByRating()),
});

const mapStateToProps = state => ({
  inputValue: state.inputReducers.inputValue,
  genreId: state.genreReducers.value,
  genreLabel: state.genreReducers,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
