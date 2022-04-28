import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email().min(10),
	password: z.string().min(3),
});
