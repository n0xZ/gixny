import { defineStore } from 'pinia';
import { client } from '@/lib/supabase';
import { Task, TaskFormFields } from '../types';

export const taskStore = defineStore('Task', {
	state: () => {
		return {
			tasks: [] as Task[],
		};
	},
	getters: {
		getActiveTasks: (state) => state.tasks.filter((task) => task.isFinished!),
	},
	actions: {
		async fetchTasks() {
			const {
				data: tasks,
				status,
				error,
			} = await client.from('task').select('*').order('id');
			if (error && status !== 200) throw new Error(error.message);

			if (tasks === null) {
				this.tasks = [];
			}
			this.tasks = tasks!;
		},
		async createTask(values: TaskFormFields) {
			const {
				data: tasks,
				status,
				error,
			} = await client.from('task').insert([values]);
			if (error && status !== 200) throw new Error(error.message);

			if (tasks === null) {
				this.tasks = [];
			}
			this.tasks = tasks!;
		},
	},
});
