export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";
export const FETCH_MOVIES_ADD_INPUT_VALUE = "FETCH_MOVIES_ADD_INPUT_VALUE";

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});

export const fetchMovieAddInputValue = inputValue => ({
  type: FETCH_MOVIES_ADD_INPUT_VALUE,
  payload: { inputValue }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export function fetchMovieByInput(inputValue)  {
  return (dispatch, getState) => {
    dispatch(fetchMovieAddInputValue(inputValue));
    const value = getState().movies.inputValue;
    dispatch(fetchMovies(value));
  }
}


export function fetchMovies(inputValue) {
  return async dispatch => {
    dispatch(fetchMoviesBegin());
    let response;
    if (inputValue) {
      response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&query=${inputValue}`
      );
    } else {
      response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5874acfd11651a28c55771624f7021f4&page=1"
      );
    }
    const res = handleErrors(response);
    const json = await res.json();
    dispatch(fetchMoviesSuccess(json.results));
    return json.results;
  };
}
