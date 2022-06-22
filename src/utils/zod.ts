import { z } from 'zod'

export const loginValidator = z.object({
	email: z
		.string()
		.min(10, { message: 'Campo requerido' })
		.email({ message: 'El formato de mail ingresado no es válido' }),
	password: z.string().min(3, { message: 'Campo requerido' }),
})
export const registerValidator = z.object({
	username: z.string().min(2, { message: 'Campo requerido' }),
	email: z
		.string()
		.min(10, { message: 'Campo requerido' })
		.email({ message: 'El formato de mail ingresado no es válido' }),
	password: z.string().min(3, { message: 'Campo requerido' }),
})
export const taskSchema = z.object({
	title: z.string().min(3, { message: 'Campo requerido' }),
	description: z.string().min(3, { message: 'Campo requerido' }),
	priority: z.string().min(3, { message: 'Campo requerido' }),
})
