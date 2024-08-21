import express from 'express';
import logger from './configs/logger';

class App {
  private app: express.Application;
  private readonly port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  start = () => {
    this.app.listen(this.port, () => {
      logger.info(`Application started on port ${this.port}.`);
    });
  };
}

export default App;
