import { ArtistModel } from '../DB';
import { IItunesArtistData } from '../types';

export async function updateArtistsOnDB(artists: IItunesArtistData[]) {
  const artistsSaving = artists.map(async (artist, number) => {
    const isArtistExist = await ArtistModel.findOne(artist);

    if (!isArtistExist) {
      const artistModel = new ArtistModel({...artist, ...{number}});
      return await artistModel.save();
    }

    return true;
  });

  await Promise.all(artistsSaving);

  return artists;
}
