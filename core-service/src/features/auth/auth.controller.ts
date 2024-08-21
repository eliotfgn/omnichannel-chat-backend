import { Router, NextFunction, Request, Response } from 'express';
import Controller from './../../interfaces/controller';
import AuthService from './auth.service';
import { CreateUserDto } from '../user/user.dto';

class AuthController implements Controller {
  path: string = 'auth';
  router: Router = Router();
  private readonly authService: AuthService = new AuthService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('register', this.register);
    this.router.post('login', this.login);
  }

  private register = async (
    req: Request<CreateUserDto>,
    res: Response,
    next: NextFunction,
  ) => {
    const user = await this.authService.register(req.body);
    res.status(201).json(user);
  };

  private login = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return res
        .status(401)
        .json({ message: 'Authorization header missing', success: false });
    }
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString(
      'ascii',
    );
    const [email, password] = credentials.split(':');

    const data = this.authService.login({ email, password });

    res.status(200).json(data);
  };
}

export default AuthController;
