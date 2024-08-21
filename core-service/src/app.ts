import express from 'express';
import logger from './configs/logger';
import errorMiddleware from './middlewares/error.middleware';

class App {
  private app: express.Application;
  private readonly port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initializePreRequestMiddlewares();
    this.initializeControllers();
    this.initializePostRequestMiddlewares();
  }

  initializeControllers() {}

  initializePreRequestMiddlewares() {}

  initializePostRequestMiddlewares() {
    this.app.use(errorMiddleware);
  }

  start() {
    this.app.listen(this.port, () => {
      logger.info(`Application started on port ${this.port}.`);
    });
  }
}

export default App;
