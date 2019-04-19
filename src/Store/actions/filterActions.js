import { fetchMovies } from './fetchingActions';
import { resetPageNumber } from './inputActions';

export const CHANGE_GENRE_ID = 'CHANGE_GENRE_ID';

export const changeGenreId = (value = null) => ({
  type: CHANGE_GENRE_ID,
  payload: value,
});

export function fetchMovieByGenre(genreId) {
  return (dispatch, getState) => {
    dispatch(changeGenreId(genreId));
    const genreStateId = getState().filterReducers.value;
    dispatch(fetchMovies(null, null, genreStateId));
    dispatch(resetPageNumber());
  };
}
