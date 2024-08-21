import { UserSchema } from './user.entity';
import z from '../../configs/z';

const CreateUserSchema = UserSchema.pick({
  email: true,
  password: true,
  firstName: true,
  lastName: true,
  role: true,
});

const UpdateUserSchema = CreateUserSchema.omit({ password: true });

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export type UpdateUserDto = Partial<z.infer<typeof UpdateUserSchema>>;
