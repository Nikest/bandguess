import * as Express from 'express';

export const router = Express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
