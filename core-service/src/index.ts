import App from './app';
import dotenv from 'dotenv';

dotenv.config();

const app: App = new App(Number(process.env.PORT));

app.start();
