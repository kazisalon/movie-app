import watchFetchMovies from './fetchMoviesSagas';
import watchFetchGenres from './fetchGenresSagas';
import { fork, all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([fork(watchFetchMovies), fork(watchFetchGenres)]);
}

export default rootSaga;
