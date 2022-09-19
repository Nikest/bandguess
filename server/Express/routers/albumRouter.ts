import * as Express from 'express';
import { getProceduralAlbum } from '../../Game';

interface IRequestQuerry {
  randomSeed: string;
  round: string;
}

export const router = Express.Router();

router.get('/procedural', async (req: Express.Request<{}, {}, IRequestQuerry>, res: Express.Response) => {
  const query: IRequestQuerry = req.query as unknown as IRequestQuerry;

  const proceduralAlbum = await getProceduralAlbum(parseInt(query?.randomSeed || '0'), parseInt(query?.round || '0'));

  res.send(proceduralAlbum);
});
