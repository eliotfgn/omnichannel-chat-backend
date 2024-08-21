import App from './app';
import dotenv from 'dotenv';
import AuthController from './features/auth/auth.controller';

dotenv.config();

const app: App = new App(Number(process.env.PORT), [new AuthController()]);

app.start();
