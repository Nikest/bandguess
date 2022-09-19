import { IState } from './interfaces';
import * as types from './Actions/types';
import * as gameCommands from '../../GameProcess';
import * as local from '../LocalStorage';

export interface IAction {
  type: string;
  payload?: IState;
}

const localData = local.getFromStorage();

const newGameStore = (artists): IState => {
  return {
    isLoading: false,
    playerId: '',
    randomSeed: 0,
    status: 'inProgress',
    round: 0,
    artists: artists,
    currentAlbum: {
      artistName: '',
      collectionName: '',
      artistId: 0,
      artworkUrl100: '',
    },
    guessedArtist: '',
    wrongSelected: [],
    tries: 3,
  };
}

const initialState: IState = localData ? localData : newGameStore([]);

export const rootReducer = (state: IState = initialState, action: IAction) => {
  console.log(action);
  switch (action.type) {

    case types.NEW_GAME: {
      return {
        ...newGameStore(state.artists),
      };
    }

    case types.GET_ARTISTS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.PUT_ARTISTS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }

    case types.SELECT_ARTIST: {
      const newState = {
        ...gameCommands.makeChoice(state, action.payload.toString()),
      };
      local.saveToStorage(newState);

      return newState
    }

    case types.NEXT_ROUND: {
      const newState = {
        ...gameCommands.nextRound(state),
      };

      local.saveToStorage(newState);

      return newState
    }
  }
  return state;
}
