import * as Express from 'express';
import { getArtistsFromDB } from '../../artists/getArtistsFromDB';

export const router = Express.Router();

router.get('/', async (req, res) => {
  const artists = await getArtistsFromDB();

  res.send(artists);
});
