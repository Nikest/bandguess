export type IArtists = string[];

export type ICurrentAlbum = {
  artist: string;
  name: string;
};

export interface IState {
  artists: IArtists;
  currentAlbum: ICurrentAlbum;
  round: number;
}
