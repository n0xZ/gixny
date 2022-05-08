

export type Credentials = {
	email: string;
	password: string;
};

export type TaskFormFields = {
	title: string;
	description: string;
	status: string;
	priority: string;
};
export type Task = {
	id: string;
	title: string;
	description: string;
	status: string;
	priority: string;
	isFinished: boolean;
};
