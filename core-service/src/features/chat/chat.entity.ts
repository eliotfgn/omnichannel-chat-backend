import { ChatChannel } from '@prisma/client';
import z from '@configs/zod';

export const ChatSchema = z.object({
  id: z.string().cuid().optional(),
  agentId: z.string(),
  customerId: z.string(),
  closed: z.boolean().optional(),
  channel: z.nativeEnum(ChatChannel),
  waitingTime: z.number().default(0),
  processingTime: z.number().default(0),
  duration: z.number().default(0),
  //messages: z.array(z.string()).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type ChatEntity = z.infer<typeof ChatSchema>;
