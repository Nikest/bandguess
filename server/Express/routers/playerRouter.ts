import * as Express from 'express';
import { savePlayerToDB, getAllPlayers } from '../../players';

export const router = Express.Router();

router.get('/', async (req, res) => {
  const players = await getAllPlayers();

  res.send(players);
});

router.post('/', async (req, res) => {
  await savePlayerToDB(req.body.params);

  res.send(true);
});
