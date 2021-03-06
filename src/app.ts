import express from 'express';
import cors from 'cors';

import routes from './routes';
import 'src/database';

class App {
  express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
