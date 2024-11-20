import type { AuthModel, RecordModel } from 'pocketbase';

export type User = AuthModel &
	RecordModel & {
		name: string;
		avatar: string;
	};
