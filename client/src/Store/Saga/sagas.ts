import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../Redux/Actions/types';
import {
  putArtistsAction,
  newGameResponseAction,
  newRoundResponseAction,
  putPlayersAction,
  savePlayerDoneAction,
  putPlayerHistoryAction,
} from '../Redux/Actions/actions';
import { generateNewGame } from '../../GameProcess';
import * as api from '../../API';

function* newGameSaga() {
  const newGameData = generateNewGame();

  const { data } = yield call(api.fetchNewAlbum, {
    randomSeed: newGameData.randomSeed.toString(),
    round: '0',
  });

  yield put(newGameResponseAction({
    currentAlbum: data,
    playerId: newGameData.playerId,
    randomSeed: newGameData.randomSeed,
  }));
}

function* newRoundSaga(params) {
  const { payload } = params;
  const { data } = yield call(api.fetchNewAlbum, {
    randomSeed: payload.randomSeed,
    round: payload.round,
  });

  yield put(newRoundResponseAction({
    currentAlbum: data,
  }));
}

function* getArtistsSaga() {
  const { data } = yield call(api.fetchArtists);

  yield put(putArtistsAction(data));
}

function* savePlayerSaga(params) {
  const { payload } = params;

  yield call(api.fetchSavePlayer, payload);

  const { data } = yield call(api.fetchPlayerHistory, payload);

  yield put(putPlayerHistoryAction({
    albums: data,
    playerId: payload.playerId,
  }));

  yield put(savePlayerDoneAction());
}

function* getPlayersSaga() {
  const { data } = yield call(api.fetchPlayers);
  yield put(putPlayersAction(data));
}

function* getHistorySaga(params) {
  const { data } = yield call(api.fetchPlayerHistory, params.payload);

  yield put(putPlayerHistoryAction({
    albums: data,
    playerId: params.payload.playerId,
  }));
}

export function* rootSaga() {
  yield takeEvery(actions.GET_ARTISTS, getArtistsSaga);
  yield takeEvery(actions.NEW_GAME_REQ, newGameSaga);
  yield takeEvery(actions.NEW_ROUND_REQ, newRoundSaga);
  yield takeEvery(actions.SAVE_PLAYER, savePlayerSaga);
  yield takeEvery(actions.GET_PLAYERS, getPlayersSaga);
  yield takeEvery(actions.GET_HISTORY, getHistorySaga);
}
