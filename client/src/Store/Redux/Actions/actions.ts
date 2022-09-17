import { createAction } from 'redux-actions';
import * as types from './types';
import { IArtists } from '../interfaces';

export const getArtistsAction = createAction(types.GET_ARTISTS);
export const putArtistsAction = createAction(types.PUT_ARTISTS, (payload: IArtists) => {return {artists: payload}});
