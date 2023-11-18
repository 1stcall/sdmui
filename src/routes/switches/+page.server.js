import switches from '$lib/switches.json';

export function load() {
	return {
		switches: switches.map((switches) => ({
			name: switches.switch,
			description: switches.description,
			selected: switches.selected,
			editable: switches.editable,
			hasArgument: switches.hasArgument,
			argumentType: switches.argumentType,
			argumentValue: switches.argumentValue
		}))
	};
}
