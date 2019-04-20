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
  payload: count,
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const MOVIEDB_API_KEY = '5874acfd11651a28c55771624f7021f4';
const MOVIEDB_BASE_URL = 'https://api.themoviedb.org/3';

export function fetchMovies(
  inputValue,
  page = 1,
  genreId,
  ratings,
  popularity,
) {
  return async (dispatch) => {
    dispatch(fetchMoviesBegin());
    console.log(genreId);
    console.log(inputValue);
    let response;
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
    const res = handleErrors(response);
    const json = await res.json();
    const results = json.results;
    console.log(json);
    console.log(json.results);
    const pageCount = json.total_pages;
    dispatch(fetchPageCount(pageCount));
    dispatch(fetchMoviesSuccess(results));
    return json.results;
  };
}
