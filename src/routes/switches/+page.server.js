import switches from '$lib/switches.json';
import pioslist from '$lib/pios_list.json';

export function load() {
	return {
		switches: switches.map((switches) => ({
			name: switches.switch,
			description: switches.description,
			selected: switches.selected,
			editable: switches.editable,
			hasArgument: switches.hasArgument,
			argumentType: switches.argumentType,
			argumentValue: switches.argumentValue,
			message: switches.message,
			errorMessage: switches.errorMessage,
			depends: switches.depends
		})),
		pioslist: pioslist.map((pios) => ({
			id: pios.slug,
			name: pios.os_name,
			description: pios.description	
		}))
	};
}
