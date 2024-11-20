import type { RecordModel } from 'pocketbase';

export type Project = RecordModel & {
	slug: string;
	title: string;
	short_description: string;
	description: string;
	url: string;
	started_at: string;
	finish_at: string;
	contributors: string[];
	tech_stacks: string[];
	images: string[];
};
