import { getArtistNamesTemplate } from './artists';
import { IiTunesArtistAxiosRes, IItunesArtistData } from '../types';
import { artistRawDataNormalize } from './utils';
import { fetchITunesAlbumsOfArtist, fetchITunesArtist } from '../API';

export async function artistsValidating(): Promise<IItunesArtistData[]> {
  return getArtistNamesTemplate().then(async (fileString: string) => {
    const artistNamesJSON = JSON.parse(fileString);

    const validArtists: Promise<IiTunesArtistAxiosRes>[] = artistNamesJSON.map(fetchITunesArtist);

    return Promise.all(validArtists).then(artistRawDataNormalize);
  });
}
