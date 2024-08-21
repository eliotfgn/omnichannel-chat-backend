import UserService from '../user/user.service';
import { CreateUserDto } from '../user/user.dto';
import { hashPassword } from '../../utils/password';

class AuthService {
  private readonly userService: UserService = new UserService();

  async register(payload: CreateUserDto) {
    payload.password = await hashPassword(payload.password);

    await this.userService.createUser(payload);
  }
}

export default AuthService;
