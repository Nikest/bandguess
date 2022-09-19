import { IGameState, IArtist } from '../Store/Redux/interfaces';
import store from '../Store/configureStore';
import * as local from '../Store/LocalStorage';
import * as actions from '../Store/Redux/Actions/actions';
import { v4 as uuidv4 } from 'uuid';
import { getRandomArbitrary } from '../utils';

export function generateNewGame() {
  local.deleteFromStorage();
  const playerId = uuidv4();
  const randomSeed = getRandomArbitrary(100000, 999999);

  return { playerId, randomSeed };
}

export function selectArtist(currentState: IGameState, artist: IArtist): IGameState {
  if (currentState.currentAlbum.artistId != artist.artistId) {
    const state = {...currentState};
    state.tries -= 1;
    state.wrongSelected = [...currentState.wrongSelected];
    state.wrongSelected.push(artist.artistId);

    if(state.tries === 0) {
      state.status = 'failed';
    }

    return state;
  }

  const state = {...currentState};
  state.guessedArtist = artist;

  setTimeout(() => {
    store.dispatch(actions.nextRoundAction())
  }, 2000);

  return state;
}

export function nextRound(currentState: IGameState) {
  const state = {...currentState};
  state.round += 1;
  state.tries = 3;
  state.wrongSelected = [];
  state.guessedArtist = null;
  state.isLoading = true;

  if (state.round === 5) {
    state.status = 'win';
  }

  setTimeout(() => {
    store.dispatch(actions.newRoundRequestAction({
      randomSeed: state.randomSeed,
      round: state.round,
    }));
  }, 100);

  return state;
}

