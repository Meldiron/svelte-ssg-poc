<script context="module" lang="ts">
	import type { Game } from '$lib/types/Game';

	export async function load({ params, fetch }: any) {
		const slug = params.slug;

		const response = await (await fetch('/api/games.json')).json();
		const games: Game[] = response.games;

		return {
			status: 200,
			props: {
				games: response.games
			}
		};
	}
</script>

<script lang="ts">
	import type { Game } from '$lib/types/Game';

	export let games: Game[];
</script>

<h3>Game List:</h3>

{#each games as game}
	<a href={'/games/' + game.slug}>{game.name}</a>
	<hr />
{/each}
