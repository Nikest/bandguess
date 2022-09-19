import { ArtistModel } from '../DB';
import { IArtist } from '../types';

export async function getArtistsFromDB(): Promise<IArtist[]> {
  return await ArtistModel.find();
}
