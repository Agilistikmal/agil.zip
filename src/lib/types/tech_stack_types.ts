import type { RecordModel } from 'pocketbase';

export type TechStack = RecordModel & {
	slug: string;
	name: string;
	iconify_name: string;
};
