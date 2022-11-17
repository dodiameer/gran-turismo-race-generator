<script>
	import { getRandomItem, getRandomProperty } from './utils';

	/** @type {import('./$types').PageData}*/
	export let data;

	let generatedRace = { track: null, group: null, startingPosition: 0 };

	const generate = () => {
		const region = getRandomProperty(data.tracks);
		generatedRace = {
			// @ts-ignore
			track: getRandomItem(data.tracks[region]),
			group: getRandomItem(data.groups),
			startingPosition: Math.floor(Math.random() * 16 + 1)
		};
	};
</script>

<button
	class="px-4 py-3 rounded bg-red-700 text-white hover:bg-red-800 text-center w-full"
	on:click={() => generate()}>Generate</button
>
{#if generatedRace.track}
	<section class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
		<article class="space-y-4 text-center">
			<h2 class="text-2xl font-bold">Track</h2>
			<p>{generatedRace.track}</p>
		</article>
		<article class="space-y-4 text-center">
			<h2 class="text-2xl font-bold">Group</h2>
			<p>{generatedRace.group} starting at P{generatedRace.startingPosition}</p>
		</article>
	</section>
{/if}
