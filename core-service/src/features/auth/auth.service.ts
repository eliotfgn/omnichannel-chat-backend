import UserService from '../user/user.service';
import { CreateUserDto } from '../user/user.dto';
import { hashPassword, verifyPassword } from '../../utils/password';
import HttpException from '../../exceptions/http.exception';

class AuthService {
  private readonly userService: UserService = new UserService();

  async register(payload: CreateUserDto) {
    payload.password = await hashPassword(payload.password);

    return this.userService.createUser(payload);
  }

  async login(payload: { email: string; password: string }) {
    const user = await this.userService.findUserByEmail(payload.email);

    const isValidPassword = await verifyPassword(
      payload.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new HttpException(401, 'Invalid Credentials', 'authentication');
    }

    const { password, ...userData } = user;

    return userData;
  }
}

export default AuthService;
