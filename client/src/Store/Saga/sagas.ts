import { takeEvery, put } from 'redux-saga/effects';
import * as actions from '../Redux/Actions/types';
import { putArtistsAction } from '../Redux/Actions/actions';

function* getArtistsSaga() {
  yield put(putArtistsAction(['Madonna', 'Red hot chilli peppers']));
}

export function* rootSaga() {
  yield takeEvery(actions.GET_ARTISTS, getArtistsSaga);
}
