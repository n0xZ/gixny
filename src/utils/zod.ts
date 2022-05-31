import { z } from 'zod';

export const loginSchema = z.object({
	email: z
		.string()
		.min(10, { message: 'Campo requerido' })
		.email({ message: 'El formato de mail ingresado no es válido' }),
	password: z.string().min(3, { message: 'Campo requerido' }),
});

export const taskSchema = z.object({
	title: z.string().min(3, { message: 'Campo requerido' }),
	description: z.string().min(3, { message: 'Campo requerido' }),
	status: z.string().min(3, { message: 'Campo requerido' }),
	priority: z.string().min(3, { message: 'Campo requerido' }),
});
