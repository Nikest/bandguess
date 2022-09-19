import { IArtist, IAlbum } from '../types';
import { AlbumModel } from '../DB';

export async function getAlbumsFromDB(artist: IArtist | null): Promise<IAlbum[] | false> {
  if (!artist) return false;
  return await AlbumModel.find({ artistId: artist.artistId });
}
