import { Environment } from '@configs/environment';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}
