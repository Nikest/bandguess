import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../Redux/Actions/types';
import { putArtistsAction } from '../Redux/Actions/actions';
import { generateNewGame } from '../../GameProcess';
import * as api from '../../API';

function* newGameSaga() {
  const newGameData = generateNewGame();
  console.log(newGameData);

  yield true;
}

function* getArtistsSaga() {
  const {data} = yield call(api.fetchArtists);
  console.log(typeof data);
  yield put(putArtistsAction(data.map(d => d.artistName)));
}

export function* rootSaga() {
  yield takeEvery(actions.GET_ARTISTS, getArtistsSaga);
  yield takeEvery(actions.NEW_GAME, newGameSaga)
}
