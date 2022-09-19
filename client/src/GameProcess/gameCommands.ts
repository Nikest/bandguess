import { IState } from '../Store/Redux/interfaces';
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

export function makeChoice(currentState: IState, selectedArtist: string): IState {
  console.log(currentState);

  if (currentState.currentAlbum.artistName !== selectedArtist) {
    const state = {...currentState};
    state.tries -= 1;
    state.wrongSelected = [...currentState.wrongSelected];
    state.wrongSelected.push(selectedArtist);

    if(state.tries === 0) {
      state.status = 'failed';
    }

    return state;
  }

  const state = {...currentState};
  state.guessedArtist = selectedArtist;

  setTimeout(() => {
    store.dispatch(actions.nextRoundAction())
  }, 1000);

  return state;
}

export function nextRound(currentState: IState) {
  const state = {...currentState};
  state.round += 1;
  state.tries = 3;
  state.wrongSelected = [];
  state.guessedArtist = '';

  if (state.round === 5) {
    state.status = 'win';
  }

  return state;
}

