import { IState } from './interfaces';
import * as types from './Actions/types';

interface IAction {
  type: string;
  payload: IState;
}

const initialState: IState = {
  round: 0,
  artists: [],
  currentAlbum: {
    name: '',
    artist: '',
  },
};

export const rootReducer = (state: IState = initialState, action: IAction) => {
  console.log('action', action);
  switch (action.type) {
    case types.GET_ARTISTS: {
      console.log('IS GET');
      return state;
    }
    case types.PUT_ARTISTS: {
      console.log('IS PUT');
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
}
