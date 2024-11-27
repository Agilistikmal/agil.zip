import { pb } from '$lib/pocketbase/pocketbase';
import type { Project } from '$lib/types/project_types';
import type { PageLoadEvent } from './$types';

export async function load({ params }: PageLoadEvent) {
	const resultProjects: Project = await pb
		.collection('projects')
		.getFirstListItem(`slug="${params.slug}"`, {
			expand: 'tech_stacks,contributors'
		});
	const project = resultProjects;

	return {
		project
	};
}
