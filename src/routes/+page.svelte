<script>
	import { getRandomItem, getRandomProperty } from './utils';

	/** @type {import('./$types').PageData}*/
	export let data;

	let generatedRace = { track: null, group: null };

	const generate = () => {
		const region = getRandomProperty(data.tracks);
		generatedRace = {
			// @ts-ignore
			track: getRandomItem(data.tracks[region]),
			group: getRandomItem(data.groups)
		};
	};
</script>

<div class="container max-w-screen-md mx-auto p-8">
	<h1 class="font-bold text-xl text-center mb-8">Gran Turismo Race Generator</h1>
	<div class="flex flex-col gap-8 items-start">
		{#if generatedRace.track}
			<p><b>Track:</b> {generatedRace.track}</p>
			<p><b>Group:</b> {generatedRace.group}</p>
		{/if}
		<button
			class="px-4 py-3 rounded bg-red-700 text-white hover:bg-red-800"
			on:click={() => generate()}>Generate</button
		>
	</div>
</div>
