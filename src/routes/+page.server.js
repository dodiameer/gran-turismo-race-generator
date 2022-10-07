const tracks = {
	europe: [
		'Alsace',
		'Autodrome Lago Maggiore',
		'Autodromo Nazionale Monza',
		'Brands Hatch',
		'Circuit de Batcelona-Catalunya',
		'Circuit de la Sarthe',
		'Circuit de Sainte-Croix',
		'Circuit de Spa-Francorchamps',
		'Deep Forest Raceway',
		'Dragon Trail',
		'Goodwood Motor Circuit',
		'Nürburgring',
		'Red Bull Ring',
		'Sardegna'
	],
	americas: [
		'Autodromo de Interlagos',
		'Blue Moon Bay Speedway',
		'Colorado Springs - Lake',
		'Daytona International Speedway',
		'Daytona International Speedway (Road Course)',
		"Fisherman's Ranch",
		'Trial Mountain Circuit',
		'Watkins Glen',
		'WeatherTech Raceway Laguna Seca',
		'Willo Springs International Raceway'
	],
	asia: [
		'Fuji International Speedway',
		'Mount Panorama',
		'Kyoto Driving Park',
		'Suzuka Circuit',
		'Tsukuba Circuit'
	]
};

const groups = ['Gr.B', 'Gr.4', 'Gr.3', 'Gr.2', 'Gr.1', 'Cart', 'Formula', 'Road Car'];

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { tracks, groups };
}
