import { IiTunesArtistAxiosRes, IiTunesAlbumAxiosRes, IItunesAlbumData } from '../types';

export function artistRawDataNormalize(rawData: IiTunesArtistAxiosRes[]) {
  return rawData.map((data) => data.data.results[0]);
}

export function albumsRawDataNormalize(rawData: IiTunesAlbumAxiosRes[]) {
  return rawData.map(data => data.data.results).flat();
}
