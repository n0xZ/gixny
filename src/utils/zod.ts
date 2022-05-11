import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email().min(10,{message:'Este campo es requerido'}),
	password: z.string().min(3),
});

export const taskSchema = z.object({
	title: z.string().min(3, { message: 'Campo requerido' }),
	description: z.string().min(3, { message: 'Campo requerido' }),
	status: z.string().min(3, { message: 'Campo requerido' }),
	priority: z.string().min(3, { message: 'Campo requerido' }),
});
