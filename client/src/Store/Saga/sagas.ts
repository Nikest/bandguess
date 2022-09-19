import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../Redux/Actions/types';
import { putArtistsAction, newGameResponseAction, newRoundResponseAction } from '../Redux/Actions/actions';
import { generateNewGame } from '../../GameProcess';
import * as api from '../../API';

function* newGameSaga() {
  const newGameData = generateNewGame();

  const { data } = yield call(api.fetchNewAlbum, newGameData.randomSeed, 0);
  yield put(newGameResponseAction({
    currentAlbum: data,
    playerId: newGameData.playerId,
    randomSeed: newGameData.randomSeed,
  }));
}

function* newRoundSaga(params) {
  const { payload } = params;
  const { data } = yield call(api.fetchNewAlbum, payload.randomSeed, payload.round);
  yield put(newRoundResponseAction({
    currentAlbum: data,
  }));
}

function* getArtistsSaga() {
  const { data } = yield call(api.fetchArtists);

  yield put(putArtistsAction(data));
}

export function* rootSaga() {
  yield takeEvery(actions.GET_ARTISTS, getArtistsSaga);
  yield takeEvery(actions.NEW_GAME_REQ, newGameSaga);
  yield takeEvery(actions.NEW_ROUND_REQ, newRoundSaga);
}
