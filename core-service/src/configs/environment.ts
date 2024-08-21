import z from '@configs/z';

export const EnvironmentSchema = z.object({
  PORT: z.string().default(5005),
});

export type Environment = z.infer<typeof EnvironmentSchema>;
