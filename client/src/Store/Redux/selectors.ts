import { IState, IArtists, ICurrentAlbum } from './interfaces';

export const getStoreSelector = (state: IState): IState => state;
export const getArtistsSelector = (state: IState): IArtists => state.artists;
export const getCurrentAlbumSelector = (state: IState): ICurrentAlbum => state.currentAlbum;
export const getRoundSelector = (state: IState): number => state.round;
export const getTriesSelector = (state: IState): number => state.tries;
export const getWrongSelectedSelector = (state: IState): string[] => state.wrongSelected;
export const getGuessedArtistSelector = (state: IState): string => state.guessedArtist;
export const getStatusSelector = (state: IState): string => state.status;
export const isLoadingSelector = (state: IState): boolean => state.isLoading;
