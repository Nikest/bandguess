import { ArtistModel } from '../DB';
import { IArtist } from '../types';

export async function updateArtistsOnDB(artists: IArtist[]) {
  const artistsSaving = artists.map(async (artist) => {
    const isArtistExist = await ArtistModel.findOne(artist);

    if (!isArtistExist) {
      const artistModel = new ArtistModel(artist);
      return await artistModel.save();
    }

    return true;
  });

  await Promise.all(artistsSaving);

  return artists;
}
