import { ICurrentAlbum, IArtist } from './interfaces';
import { ICombineStore } from './reducers';

export const getGameStoreSelector = ({ gameReducer }: ICombineStore) => gameReducer;
export const getArtistsSelector = ({ artistsReducer }: ICombineStore) => artistsReducer.artists;
export const getCurrentAlbumSelector = ({ gameReducer }: ICombineStore): ICurrentAlbum => gameReducer.currentAlbum;
export const getRoundSelector = ({ gameReducer }: ICombineStore): number => gameReducer.round;
export const getTriesSelector = ({ gameReducer }: ICombineStore): number => gameReducer.tries;
export const getWrongSelectedSelector = ({ gameReducer }: ICombineStore): number[] => gameReducer.wrongSelected;
export const getGuessedArtistSelector = ({ gameReducer }: ICombineStore): IArtist => gameReducer.guessedArtist;
export const getStatusSelector = ({ gameReducer }: ICombineStore): string => gameReducer.status;
export const isLoadingSelector = ({ gameReducer }: ICombineStore): boolean => gameReducer.isLoading;
