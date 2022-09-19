import * as Express from 'express';
import { getProceduralAlbum } from '../../Game';
import { IRoundRequestQuery } from './types';

export const router = Express.Router();

router.get('/procedural', async (req: Express.Request<{}, {}, IRoundRequestQuery>, res: Express.Response) => {
  const query: IRoundRequestQuery = req.query as unknown as IRoundRequestQuery;

  const proceduralAlbum = await getProceduralAlbum(parseInt(query?.randomSeed || '0'), parseInt(query?.round || '0'));

  res.send(proceduralAlbum);
});
