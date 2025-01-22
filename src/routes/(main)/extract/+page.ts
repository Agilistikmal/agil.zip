import { pb } from '$lib/pocketbase/pocketbase';
import type { Project } from '$lib/types/project_types';
import type { TechStack } from '$lib/types/tech_stack_types';
import type { ListResult } from 'pocketbase';
import type { PageLoadEvent } from './$types';

export async function load({ url }: PageLoadEvent) {
	const paramPage = url.searchParams.get('page');
	const paramLimit = url.searchParams.get('limit');
	const paramSort = url.searchParams.get('sort');
	const paramSearch = url.searchParams.get('search');
	const paramTechStack = url.searchParams.get('techStack');

	let sort: string = '-started_at';
	switch (paramSort) {
		case 'az':
			sort = 'title';
			break;
		case 'za':
			sort = '-title';
			break;
		case 'newest':
			sort = '-started_at';
			break;
		case 'oldest':
			sort = 'started_at';
			break;
		default:
			sort = '-started_at';
			break;
	}

	const resultProjects: ListResult<Project> = await pb
		.collection('projects')
		.getList(Number(paramPage), Number(paramLimit), {
			expand: 'contributors,tech_stacks',
			sort: sort,
			filter: `title ~ "${paramSearch || ''}" && tech_stacks.slug ?~ "${paramTechStack || ''}"`
		});
	const projects = resultProjects;

	const resultTechStacks: TechStack[] = await pb.collection('tech_stacks').getFullList();
	const techStacks = resultTechStacks;

	return {
		projects,
		techStacks
	};
}
