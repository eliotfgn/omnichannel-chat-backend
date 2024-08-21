import { CreateUserDto, UpdateUserDto } from './user.dto';
import prisma from '../../db/prisma';
import HttpException from '../../exceptions/http.exception';
import { UserEntity } from './user.entity';

class UserService {
  async createUser(payload: CreateUserDto) {
    const existingUser = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (existingUser) {
      throw new HttpException(409, 'Email already exists', 'conflict');
    }
    return prisma.user.create({ data: payload });
  }

  async findUserById(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new HttpException(404, 'User not found.', 'not_found');
    }

    return user;
  }

  async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new HttpException(404, 'User not found.', 'not_found');
    }

    return user;
  }

  async updateUser(id: string, payload: UpdateUserDto) {
    await this.findUserById(id);

    return prisma.user.update({
      where: { id },
      data: payload,
    });
  }

  async deleteUser(id: string) {
    await this.findUserById(id);
    prisma.user.delete({ where: { id } });
  }
}

export default UserService;
