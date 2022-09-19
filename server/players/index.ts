import { PlayerModel } from '../DB';
import { IPlayer } from '../types';

export async function savePlayerToDB(player: IPlayer) {
  const newPlayer = new PlayerModel(player);

  return await newPlayer.save();
}

export async function getAllPlayers(): Promise<IPlayer[]> {
  const players = await PlayerModel.find();
  return players.reverse();
}
