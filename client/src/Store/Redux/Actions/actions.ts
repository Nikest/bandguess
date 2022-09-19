import { createAction } from 'redux-actions';
import * as types from './types';
import { IArtists } from '../interfaces';

export const getArtistsAction = createAction(types.GET_ARTISTS);
export const putArtistsAction = createAction(types.PUT_ARTISTS, (payload: IArtists) => {return {artists: payload}});

export const selectArtistAction = createAction(types.SELECT_ARTIST, (payload: string) => payload);
export const nextRoundAction = createAction(types.NEXT_ROUND);
export const newGameAction = createAction(types.NEW_GAME);
