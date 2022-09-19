import { IPlayer } from '../../../../server/types';

export interface IArtist {
  artistName: string;
  artistId: number;
}

export interface IPlayerData extends IPlayer {}

export type ICurrentAlbum = {
  artistName: string;
  artistId: number;
  collectionName: string;
  artworkUrl100: string;
};

export interface IGameState {
  isLoading: boolean;
  playerId: string,
  randomSeed: number,
  currentAlbum: ICurrentAlbum;
  wrongSelected: number[];
  round: number;
  tries: number;
  guessedArtist: IArtist | null;
  status: 'inProgress' | 'win' | 'failed';
}

export interface IArtistsState {
  artists: IArtist[];
  isLoading: boolean;
}

export interface IPlayersStore {
  isLoading: boolean;
  isSaving: boolean;
  players: IPlayerData[];
}
