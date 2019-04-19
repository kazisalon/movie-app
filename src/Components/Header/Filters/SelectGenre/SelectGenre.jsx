import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './SelectGenre.css';
import { __values } from 'tslib';
import { fetchMovieByGenre } from '../../../../Store/actions/filterActions';

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
class SelectGenre extends Component {
  handleChange = (value, action) => {
    if (action.action === 'clear') {
      this.props.sendGenreValue(null);
    } else if (action.action === 'select-option') {
      this.props.sendGenreValue(value);
    }
  };

  render() {
    return (
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        value={this.props.genreLabel}
        isDisabled={false}
        isLoading={false}
        isClearable
        name="Genre"
        onChange={this.handleChange}
        options={genreOptions}
        placeholder="Select genre..."
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendGenreValue: value => dispatch(fetchMovieByGenre(value)),
});

const mapStateToProps = state => ({
  genreId: state.filterReducers.value,
  genreLabel: state.filterReducers,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectGenre);
