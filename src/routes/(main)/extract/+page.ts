import { pb } from '$lib/pocketbase/pocketbase';
import type { Project } from '$lib/types/project_types';
import type { TechStack } from '$lib/types/tech_stack_types';
import type { PageLoadEvent } from './$types';

export async function load({ url }: PageLoadEvent) {
	const paramPage = url.searchParams.get('page');
	const paramLimit = url.searchParams.get('limit');
	const paramSort = url.searchParams.get('sort');
	const paramSearch = url.searchParams.get('search');

	let sort: string = '-created';
	switch (paramSort) {
		case 'az':
			sort = 'title';
			break;
		case 'za':
			sort = '-title';
			break;
		case 'newest':
			sort = '-created';
			break;
		case 'oldest':
			sort = 'created';
			break;
		default:
			sort = '-created';
			break;
	}

	const resultProjects = await pb
		.collection('projects')
		.getList(Number(paramPage), Number(paramLimit), {
			expand: 'contributors,tech_stacks',
			sort: sort,
			filter: `title ~ "${paramSearch || ''}"`
		});
	const projects = resultProjects.items as Project[];

	const resultTechStacks = await pb.collection('tech_stacks').getFullList();
	const techStacks = resultTechStacks as TechStack[];

	return {
		projects,
		techStacks
	};
}
