export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_PAGE_COUNT = 'FETCH_PAGE_COUNT';

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});

export const fetchPageCount = count => ({
  type: FETCH_PAGE_COUNT,
  payload: { count },
});

const MOVIEDB_API_KEY = '5874acfd11651a28c55771624f7021f4';
const MOVIEDB_BASE_URL = 'https://api.themoviedb.org/3';

// I tried different approaches on how to organize this action, and I think this can the best way
// of how to organize fetching(in this particular case).When we have all the logic in one place.
// If we would have one action for every kind of fetching, it would lead to duplicating of the code
// and if you change something, you will be forced to change the logic in different places of
// different components, because which fetching action we should call will depends on a lot of factors
// like existing of text in input, state of "byPopularity", page and so on.
// This approach can be wrong(and probably, it is), just wanted to show my point.
export function fetchMovies(
  inputValue,
  page = 1,
  genreId,
  ratings,
  popularity,
) {
  return async (dispatch) => {
    dispatch(fetchMoviesBegin());
    let response;
    try {
      if (popularity && genreId) {
        response = await fetch(
          `${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}`,
        );
      } else if (popularity) {
        response = await fetch(
          `${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`,
        );
      } else if (ratings && genreId) {
        response = await fetch(
          `${MOVIEDB_BASE_URL}/discover/movie?sort_by=vote_average.desc&api_key=${MOVIEDB_API_KEY}&page=${page}&vote_count.gte=2200&with_genres=${genreId}`,
        );
      } else if (ratings) {
        response = await fetch(
          `${MOVIEDB_BASE_URL}/discover/movie?sort_by=vote_average.desc&api_key=${MOVIEDB_API_KEY}&page=${page}&vote_count.gte=2200`,
        );
      } else if (inputValue) {
        response = await fetch(
          `${MOVIEDB_BASE_URL}/search/movie?api_key=${MOVIEDB_API_KEY}&query=${inputValue}&page=${page}`,
        );
      } else if (genreId) {
        response = await fetch(
          `${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}`,
        );
      } else {
        response = await fetch(
          `${MOVIEDB_BASE_URL}/movie/now_playing?api_key=${MOVIEDB_API_KEY}&page=${page}`,
        );
      }
    } catch (e) {
      dispatch(fetchMoviesFailure(' Failed to load!'));
      return;
    }
    dispatch(fetchMoviesFailure(null));
    const json = await response.json();
    // eslint-disable-next-line prefer-destructuring
    const results = json.results;
    const pageCount = json.total_pages;
    dispatch(fetchPageCount(pageCount));
    dispatch(fetchMoviesSuccess(results));
  };
}
