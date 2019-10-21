// Core
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// Helpers
import useDebounce from '../../../helpers/useDebounce';
// Actions
import {
  changeGenreValue,
  togglePopularity,
  toggleRating,
  changeInputValue,
} from '../../../actions/filtersActions';
import { fetchNowPlayingMovies } from '../../../actions/fetchingActions';
// Styles
import {
  StyledReactSelect,
  FilterButtonsContainer,
  FiltersContainer,
  SearchButton,
  SearchForm,
  SearchInput,
  RattingButton,
  PopularityButton,
} from './styles';

const Filters = props => {
  const {
    changeInputValue,
    fetchNowPlayingMovies,
    togglePopularity,
    toggleRating,
    genreId,
    genres = [],
    changeGenreValue,
    byRating,
    byPopularity,
    inputValue,
  } = props;

  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      changeInputValue(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, changeInputValue]);

  useEffect(() => {
    if (!inputValue) {
      setSearchTerm('');
    }
  }, [inputValue]);

  const handleInputChange = inputText => {
    setSearchTerm(inputText);
    if (!inputText) {
      fetchNowPlayingMovies();
    }
  };

  // value, action = custom "events" from react-select library
  const handleGenreChange = (value, action) => {
    if (action.action === 'clear') {
      changeGenreValue(0);
    } else if (action.action === 'select-option') {
      changeGenreValue(value.value);
    }
  };

  const genresFormatedForSelect = genres.map(genre => ({
    value: genre.id,
    label: genre.name,
  }));
  const chosenGenre = genresFormatedForSelect.find(genre => genre.value === genreId);

  return (
    <FiltersContainer>
      <FilterButtonsContainer>
        <StyledReactSelect
          className="react-select-container"
          classNamePrefix="react-select"
          value={chosenGenre || null}
          isDisabled={false}
          isLoading={false}
          isClearable
          name="Genre"
          onChange={handleGenreChange}
          options={genresFormatedForSelect}
          placeholder="Select genre..."
        />
        <RattingButton checked={byRating} onClick={() => toggleRating()} type="button">
          Rating
        </RattingButton>
        <PopularityButton
          checked={byPopularity}
          onClick={() => togglePopularity()}
          type="button"
        >
          Popularity
        </PopularityButton>
      </FilterButtonsContainer>

      <SearchForm onSubmit={e => e.preventDefault()}>
        <SearchInput
          placeholder="Search films..."
          value={searchTerm}
          onFocus={e => (e.target.placeholder = '')}
          onBlur={e => (e.target.placeholder = 'Search films...')}
          onChange={e => handleInputChange(e.target.value)}
        />
        <SearchButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchForm>
    </FiltersContainer>
  );
};

const mapDispatchToProps = {
  changeInputValue,
  changeGenreValue,
  togglePopularity,
  toggleRating,
  fetchNowPlayingMovies,
};

const mapStateToProps = state => ({
  inputValue: state.filters.inputValue,
  genreId: state.filters.genreId,
  genres: state.genres.items,
  byRating: state.filters.byRating,
  byPopularity: state.filters.byPopularity,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
