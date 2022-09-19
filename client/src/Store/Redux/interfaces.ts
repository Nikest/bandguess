export type IArtists = string[];

export type ICurrentAlbum = {
  artistName: string;
  artistId: number;
  collectionName: string;
  artworkUrl100: string;
};

export interface IState {
  isLoading: boolean;
  playerId: string,
  randomSeed: number,
  artists: IArtists;
  currentAlbum: ICurrentAlbum;
  wrongSelected: string[];
  round: number;
  tries: number;
  guessedArtist: string;
  status: 'inProgress' | 'win' | 'failed';
}
