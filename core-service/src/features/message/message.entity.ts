import { z } from 'zod';
import { MessageStatus, MessageType, MessageAuthorType } from '@prisma/client';

export const MessageSchema = z.object({
  id: z.string().cuid(),
  text: z.string(),
  from: z.string(),
  status: z.nativeEnum(MessageStatus).default('DELIVERED'),
  type: z.nativeEnum(MessageType),
  authorType: z.nativeEnum(MessageAuthorType),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  medias: z.array(z.string()).optional(),
  chatId: z.string().nullable().optional(),
});
