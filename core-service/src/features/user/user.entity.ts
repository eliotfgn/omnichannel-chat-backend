import z from '@configs/zod';
import { Role } from '@prisma/client';

export const UserSchema = z.object({
  id: z.string().cuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.nativeEnum(Role),
  chats: z.array(z.string()).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type UserEntity = z.infer<typeof UserSchema>;
