import express from "express";

class App {
  private app: express.Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  start = () => {
    this.app.listen(this.port, () => {
      console.log(`Application started on port ${this.port}.`);
    });
  };
}

export default App;
