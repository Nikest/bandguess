import { IState, IArtists, ICurrentAlbum } from './interfaces';

export const getStoreSelector = (state: IState): IState => state;
export const getArtistsSelector = (state: IState): IArtists => state.artists;
export const getCurrentAlbumSelector = (state: IState): ICurrentAlbum => state.currentAlbum;
