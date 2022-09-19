import { Schema, model } from 'mongoose';
import { IArtist, IAlbum, IPlayer } from '../types';

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

const PlayerSchema = new Schema<IPlayer>({
  name: String,
  successfulRounds: Number,
  randomSeed: Number,
  lastGeneratedSeed: Number,
  playerId: String,
  isDone: Boolean,
});

export const ArtistModel = model<IArtist>('artist', ArtistSchema);
export const AlbumModel = model<IAlbum>('album', AlbumSchema);
export const PlayerModel = model<IPlayer>('player', PlayerSchema);
