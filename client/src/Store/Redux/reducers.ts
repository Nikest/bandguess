import { combineReducers } from 'redux';
import {
  IGameState,
  IArtistsState,
  IArtist,
  IPlayerData,
  IPlayersState,
  IPlayerHistoryState,
} from './interfaces';
import * as types from './Actions/types';
import * as gameCommands from '../../GameProcess';
import * as local from '../LocalStorage';

export interface IGameAction {
  type: string;
  payload?: IGameState;
}

export interface IArtistsAction {
  type: string;
  payload?: IArtist[];
}

export interface IPlayersAction {
  type: string;
  payload?: IPlayerData[];
}

export interface IPlayerHistoryAction {
  type: string;
  payload?: Partial<IPlayerHistoryState>;
}

export interface ICombineStore {
  artistsReducer: IArtistsState;
  gameReducer: IGameState;
  playersReducer: IPlayersState;
  playerHistoryReducer: IPlayerHistoryState;
}

const localData = local.getFromStorage();

const newGameStoreCreator = (loading = false): IGameState => {
  return {
    isLoading: loading,
    playerId: '',
    randomSeed: 0,
    status: 'inProgress',
    round: 0,
    currentAlbum: {
      artistName: '',
      collectionName: '',
      artistId: 0,
      artworkUrl100: '',
    },
    guessedArtist: null,
    wrongSelected: [],
    tries: 3,
  };
}

const initialGameState: IGameState = localData ? localData : newGameStoreCreator();

const initialArtistsState: IArtistsState = {
  artists: [],
  isLoading: false,
}

const initialPlayersStore: IPlayersState = {
  isLoading: false,
  isSaving: false,
  players: [],
}

const initialPlayerHistoryState: IPlayerHistoryState = {
  albums: [],
  playerId: '',
  isLoading: false,
}

const artistsReducer = (state: IArtistsState = initialArtistsState, action: IArtistsAction) => {
  switch (action.type) {
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

    default: {
      return state;
    }
  }
}

const gameReducer = (state: IGameState = initialGameState, action: IGameAction) => {
  switch (action.type) {
    case types.NEW_GAME_REQ: {
      local.deleteFromStorage();
      return newGameStoreCreator(true);
    }

    case types.NEW_GAME_RES: {
      const newState = {
        ...state,
        isLoading: false,
        ...action.payload,
      };

      local.saveToStorage(newState);
      return newState;
    }

    case types.SELECT_ARTIST: {
      const newState = {
        ...gameCommands.selectArtist(state, action.payload as unknown as IArtist),
      };
      local.saveToStorage(newState);

      return newState;
    }

    case types.NEXT_ROUND: {
      const newState = {
        ...gameCommands.nextRound(state),
      };

      local.saveToStorage(newState);

      return newState;
    }

    case types.NEW_ROUND_RES: {
      const newState = {
        ...state,
        ...action.payload,
        isLoading: false,
      };

      local.saveToStorage(newState);

      return newState;
    }

    case types.GAME_END: {
      gameCommands.gameEnd(state, action.payload.toString());
      local.deleteFromStorage();
      return newGameStoreCreator();
    }

    default: {
      return state;
    }
  }
}

const playersReducer = (state: IPlayersState = initialPlayersStore, action: IPlayersAction) => {
  switch (action.type) {
    case types.SAVE_PLAYER: {
      return {
        ...state,
        isLoading: true,
        isSaving: true,
      };
    }

    case types.SAVE_PLAYER_DONE: {
      return {
        ...state,
        isLoading: false,
        isSaving: false,
      };
    }

    case types.GET_PLAYERS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.PUT_PLAYERS: {
      return {
        ...state,
        isLoading: false,
        players: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

const playerHistoryReducer = (state: IPlayerHistoryState = initialPlayerHistoryState, action: IPlayerHistoryAction) => {
  switch (action.type) {
    case types.GET_HISTORY: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case types.PUT_HISTORY: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }
    }

    default: {
      return state;
    }
  }
}

export const rootReducer = combineReducers({ gameReducer, artistsReducer, playersReducer, playerHistoryReducer });
