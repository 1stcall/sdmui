import data from '$lib/pios_list.json';

export function load() {
	return {
		summaries: data.map((os) => ({
			slug: os.slug,
			name: os.os_name,
			description: os.description
		}))
	};
}
