import { ArtistModel } from '../DB';
import { IArtist } from '../types';

export async function getArtistsFromDB(): Promise<IArtist[]> {
  return await ArtistModel.find();
}

export async function getArtistByNumberFromDB(number: number): Promise<IArtist | null> {
  return await ArtistModel.findOne({ number });
}
