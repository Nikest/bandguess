import axios from 'axios';
import { IiTunesArtistAxiosRes, IItunesArtistData, IiTunesAlbumAxiosRes } from '../types';

const iTunesAPIurl = 'https://itunes.apple.com/search';

export async function fetchITunesArtist(artistName: string): Promise<IiTunesArtistAxiosRes> {
  const urlSearchParams = new URLSearchParams({
    term: artistName.replace(/ /g, '+'),
    attribute: 'artistTerm',
    entity: 'musicArtist',
  });

  return axios.get(`${iTunesAPIurl}?${urlSearchParams.toString()}`);
}

export async function fetchITunesAlbumsOfArtist(artistData: IItunesArtistData): Promise<IiTunesAlbumAxiosRes> {
  const urlSearchParams = new URLSearchParams({
    term: artistData.artistName.replace(/ /g, '+'),
    attribute: 'artistTerm',
    entity: 'album',
    limit: '8',
  });

  return axios.get(`${iTunesAPIurl}?${urlSearchParams.toString()}`);
}
