import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './Filters.css';
import { fetchMovieByGenre } from '../../../Store/actions/genreActions';
import {
  fetchMoviesByPopularity,
  fetchMoviesByRating,
} from '../../../Store/actions/filterActions';
import { fetchMovieByInput } from '../../../Store/actions/inputActions';


// eslint-disable-next-line react/prefer-stateless-function
const Filters = (props) => {
  const {
    sendSearchQuery, inputValue, moviesByPopularity, moviesByRating, genreId, setGenreValue,
  } = props;

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

  const genre = genreOptions.find(o => o.value === genreId);
  // value, action = custom "events" from react-select library
  const handleChange = (value, action) => {
    if (action.action === 'clear') {
      setGenreValue();
    } else if (action.action === 'select-option') {
      setGenreValue(value);
    }
  };

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
            onChange={handleChange}
            options={genreOptions}
            placeholder="Select genre..."
          />
          <button
            className="filter-buttons ratting-button"
            onClick={() => moviesByRating()}
            type="button"
          >
              Rating
          </button>
          <button
            className="filter-buttons popularity-button"
            onClick={() => moviesByPopularity()}
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
              value={inputValue}
                // eslint-disable-next-line no-return-assign
              onFocus={e => (e.target.placeholder = '')}
                // eslint-disable-next-line no-return-assign
              onBlur={e => (e.target.placeholder = 'Search films...')}
              onChange={e => sendSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};


const mapDispatchToProps = dispatch => ({
  sendSearchQuery: inputData => dispatch(fetchMovieByInput(inputData)),
  setGenreValue: value => dispatch(fetchMovieByGenre(value)),
  moviesByPopularity: () => dispatch(fetchMoviesByPopularity()),
  moviesByRating: () => dispatch(fetchMoviesByRating()),
});

const mapStateToProps = state => ({
  inputValue: state.inputReducers.inputValue,
  genreId: state.genreReducers.value,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
