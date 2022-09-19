import * as Express from 'express';
import { IPlayer } from '../../types';
import { savePlayerToDB, getAllPlayers, getPlayerHistory } from '../../players';

export const router = Express.Router();

router.get('/', async (req, res) => {
  const players = await getAllPlayers();

  res.send(players);
});

router.get('/history', async (req, res) => {
  const player: IPlayer = {
    name: req.query.name as string,
    playerId: req.query.playerId as string,
    randomSeed: parseInt(req.query.randomSeed as string),
    successfulRounds: parseInt(req.query.successfulRounds as string),
  };

  const history = await getPlayerHistory(player);

  res.send(history);
});

router.post('/', async (req, res) => {
  await savePlayerToDB(req.body.params);

  res.send(true);
});
