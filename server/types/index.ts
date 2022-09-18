export interface IItunesArtistData {
  artistName: string;
  artistId: number;
}

export interface IItunesAlbumData {
  artistName: string;
  artistId: number;
  collectionName: string;
  artworkUrl100: string;
}

export interface IiTunesArtistAxiosRes {
  data: {
    resultCount: number;
    results: IItunesArtistData[];
  };
}

export interface IiTunesAlbumAxiosRes {
  data: {
    resultCount: number;
    results: IItunesAlbumData[];
  };
}

export interface IAlbum extends IItunesAlbumData {}

export interface IArtist extends IItunesArtistData {}

