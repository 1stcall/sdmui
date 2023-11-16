import data from '$lib/switches.json';

export function load() {
	return {
		switches: data.map((switches) => ({
			name: switches.switch,
			description: switches.description,
			selected: switches.selected,
			enabled: switches.enabled
		}))
	};
}
