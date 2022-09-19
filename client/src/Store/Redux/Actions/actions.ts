import { createAction } from 'redux-actions';
import * as types from './types';
import { IArtist, IGameState } from '../interfaces';
import { IPlayer } from '../../../../../server/types';

export const getArtistsAction = createAction(types.GET_ARTISTS);
export const putArtistsAction = createAction(types.PUT_ARTISTS, (payload: IArtist[]) => {return {artists: payload}});

export const selectArtistAction = createAction(types.SELECT_ARTIST, (payload: IArtist) => payload);
export const nextRoundAction = createAction(types.NEXT_ROUND);
export const newGameRequestAction = createAction(types.NEW_GAME_REQ);
export const newGameResponseAction = createAction(types.NEW_GAME_RES, (payload: Partial<IGameState>) => payload);
export const newRoundRequestAction = createAction(types.NEW_ROUND_REQ, (payload: { randomSeed: number, round: number}) => payload);
export const newRoundResponseAction = createAction(types.NEW_ROUND_RES, (payload: Partial<IGameState>) => payload);
export const gameEndAction = createAction(types.GAME_END);

export const savePlayerAction = createAction(types.SAVE_PLAYER, (payload: IPlayer) => payload);
export const getPlayersAction = createAction(types.GET_PLAYERS);
export const putPlayersAction = createAction(types.PUT_PLAYERS, (payload: IPlayer[]) => payload);
