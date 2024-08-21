import App from './app';
import 'dotenv/config';

const app: App = new App(+process.env.PORT);

app.start();
