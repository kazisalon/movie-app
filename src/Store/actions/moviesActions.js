export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';


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


export function fetchMovies() {
  return (dispatch) => {
    dispatch(fetchMoviesBegin());
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5874acfd11651a28c55771624f7021f4&page=1')
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        console.log(...json.results);
        dispatch(fetchMoviesSuccess(json.results));
        return json.results;
      });
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}