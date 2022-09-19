import { combineReducers } from 'redux';
import { IGameState, IArtistsState, IArtist } from './interfaces';
import * as types from './Actions/types';
import * as gameCommands from '../../GameProcess';
import * as local from '../LocalStorage';
import {NEW_ROUND_RES} from "./Actions/types";

export interface IGameAction {
  type: string;
  payload?: IGameState;
}

export interface IArtistsAction {
  type: string;
  payload?: IArtist[];
}

export interface ICombineStore {
  artistsReducer: IArtistsState;
  gameReducer: IGameState;
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
      return newGameStoreCreator(true);
    }

    case types.NEW_GAME_RES: {
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
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

    default: {
      return state;
    }
  }
}

export const rootReducer = combineReducers({ gameReducer, artistsReducer })
