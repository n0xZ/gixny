

export type Credentials = {
	email: string;
	password: string;
};

export type TaskFormFields = {
	title: string;
	description: string;
	priority: string;
};
export type Task = {
	id: string;
	title: string;
	description: string;
	priority: string;
	isFinished: boolean;
};
