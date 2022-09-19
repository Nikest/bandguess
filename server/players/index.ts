import { PlayerModel } from '../DB';
import { IPlayer, IAlbum } from '../types';
import { getProceduralAlbum } from '../Game';

export async function savePlayerToDB(player: IPlayer) {
  const newPlayer = new PlayerModel(player);

  return await newPlayer.save();
}

export async function getAllPlayers(): Promise<IPlayer[]> {
  const players = await PlayerModel.find();
  return players.reverse();
}

export async function getPlayerHistory(player: IPlayer) {
  const albums: IAlbum[] = [];

  for (let i = 0; i < player.successfulRounds; i++) {
    const album = await getProceduralAlbum(player.randomSeed, i);
    album ? albums.push(album) : false;
  }

  return albums;
}
