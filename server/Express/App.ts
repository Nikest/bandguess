import * as Express from 'express';
import * as path from 'path';

import { homeRouter } from './routers/';

export class ExpressApp {
  public express: Express.Express;

  constructor() {
    this.express = Express();
    this.mount();
  }

  private mount() {
    this.express.use(Express.json());
    this.express.use(Express.urlencoded({ extended: false }));
    this.express.use(Express.static(path.join(__dirname, '../../build')));

    this.express.use('/', homeRouter.router);
  }

  public set(prop: string, value: number) {
    this.express.set(prop, value);
  }
}