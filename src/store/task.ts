import { defineStore } from 'pinia'
import { z } from 'zod'

import { taskSchema } from '@/utils/zod'
import { client } from '@/lib/supabase'
import { Task } from '@/types'

export const useTaskStore = defineStore('Task', {
	state: () => {
		return {
			tasks: [] as Task[],
		}
	},
	getters: {
		getActiveTasks: (state) => state.tasks.filter((task) => !task.isFinished),
		getFinishedTasks: (state) => state.tasks.filter((task) => task.isFinished),
	},
	actions: {
		async fetchTasks(userId: string) {
			const {
				data: tasks,
				status,
				error,
			} = await client
				.from('task')
				.select('*')
				.order('id')
				.match({ userId: userId })

			if (error && status !== 200) throw new Error(error.message)

			if (tasks === null) {
				this.tasks = []
			}
			this.tasks = tasks!
		},
		async createTask(values: z.infer<typeof taskSchema>, userId: string) {
			const insertedValues = { ...values, userId }
			console.log(insertedValues)
			const {
				data: tasks,
				status,
				error,
			} = await client.from('task').insert([insertedValues])
			if (error && status !== 200) throw new Error(error.message)

			if (tasks === null) {
				this.tasks = []
			}
			this.tasks = tasks!
			return this.tasks
		},
		async deleteTask(id: number) {
			const {
				data: tasks,
				status,
				error,
			} = await client.from('task').delete().match({ id: id })
			if (error && status !== 200) throw new Error(error.message)

			if (tasks === null) {
				this.tasks = []
			}
			this.tasks = tasks!
		},
		async updateTask(id: number, values: z.infer<typeof taskSchema>) {
			const {
				data: tasks,
				status,
				error,
			} = await client.from('task').update(values).match({ id: id })
			if (error && status !== 200) throw new Error(error.message)

			if (tasks === null) {
				this.tasks = []
			}
			this.tasks = tasks!
		},
	},
})
