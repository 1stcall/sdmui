import { error } from '@sveltejs/kit';
import data from '$lib/pios_list.json';

export function load({ params }) {
	const os = data.find((data) => data.slug === params.slug);

	if (!os) throw error(404);

	return {
		os
	};
}
