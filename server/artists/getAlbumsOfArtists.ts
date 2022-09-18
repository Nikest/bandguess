import { IItunesArtistData, IiTunesAlbumAxiosRes } from '../types';
import { fetchITunesAlbumsOfArtist } from '../API';
import { albumsRawDataNormalize } from './utils';

export async function getAlbumsOfArtists(artistsData: IItunesArtistData[]) {
  const artists: Promise<IiTunesAlbumAxiosRes>[] = artistsData.map(fetchITunesAlbumsOfArtist);

  return Promise.all(artists).then(albumsRawDataNormalize);
}
