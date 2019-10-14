// Core
import React from 'react';
import { connect } from 'react-redux';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// Actions
import {
  changeGenreValue,
  togglePopularity,
  toggleRating,
  changeInputValue,
} from '../../../actions/filtersActions';
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
    inputValue,
    togglePopularity,
    toggleRating,
    genreId,
    genres = [],
    changeGenreValue,
    byRating,
    byPopularity,
  } = props;

  const genresFormatedForSelect = genres.map(genre => ({
    value: genre.id,
    label: genre.name,
  }));
  let chosenGenre = genresFormatedForSelect.find(genre => genre.value === genreId);

  // value, action = custom "events" from react-select library
  const handleGenreChange = (value, action) => {
    if (action.action === 'clear') {
      changeGenreValue(0);
    } else if (action.action === 'select-option') {
      changeGenreValue(value.value);
    }
  };

  return (
    <>
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
            value={inputValue}
            onFocus={e => (e.target.placeholder = '')}
            onBlur={e => (e.target.placeholder = 'Search films...')}
            onChange={e => changeInputValue(e.target.value)}
          />
          <SearchButton type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchForm>
      </FiltersContainer>
    </>
  );
};

const mapDispatchToProps = {
  changeInputValue,
  changeGenreValue,
  togglePopularity,
  toggleRating,
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
