import * as Gen from 'random-seed';
import { IAlbum } from '../types/';
import { getArtistByNumberFromDB } from '../artists/getArtistsFromDB';
import { getAlbumsFromDB } from '../artists/getAlbumsFromDB';

export async function getProceduralAlbum(randomSeed: number, round: number): Promise<IAlbum | null> {
  const rand = new Gen(randomSeed + round);
  const artistProceduralNumber = rand(20);

  const artist = await getArtistByNumberFromDB(artistProceduralNumber);
  const albums = await getAlbumsFromDB(artist);

  if (albums && albums.length > 0) {
    const albumProceduralNumber = rand(albums?.length);

    return albums[albumProceduralNumber];
  }

  return null;
}
