import { AlbumModel } from '../DB';
import { IAlbum } from '../types';

export async function updateAlbumsOnDB(albums: IAlbum[]) {
  const artistsSaving = albums.map(async (album) => {
    const isAlbumExist = await AlbumModel.findOne(album);

    if (!isAlbumExist) {
      const albumModel = new AlbumModel(album);
      return await albumModel.save();
    }

    return true;
  });

  await Promise.all(artistsSaving);

  return true;
}
