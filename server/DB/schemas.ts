import { Schema, model } from 'mongoose';
import { IArtist, IAlbum } from '../types';

const ArtistSchema = new Schema<IArtist>({
  artistName: String,
  artistId: String,
});

const AlbumSchema = new Schema<IAlbum>({
  artistName: String,
  artistId: Number,
  collectionName: String,
  artworkUrl100: String,
});

export const ArtistModel = model<IArtist>('artist', ArtistSchema);
export const AlbumModel = model<IAlbum>('album', AlbumSchema);
