import express from 'express';
import logger from './configs/logger';
import errorMiddleware from './middlewares/error.middleware';
import Controller from './interfaces/controller';

class App {
  private app: express.Application;
  private controllers: Controller[];
  private readonly port: number;

  constructor(port: number, controllers: Controller[]) {
    this.app = express();
    this.port = port;
    this.controllers = controllers;

    this.initializePreRequestMiddlewares();
    this.initializeControllers();
    this.initializePostRequestMiddlewares();
  }

  initializeControllers() {
    this.controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }

  initializePreRequestMiddlewares() {
    this.app.use(express.json());
  }

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
