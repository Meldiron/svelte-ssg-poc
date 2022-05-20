<script context="module" lang="ts">
	import type { Game } from 'src/lib/types/Game';

	export async function load({ params, fetch, session, stuff }: any) {
		const slug = params.slug;

		const response = await (await fetch('/api/games.json')).json();
		const games: Game[] = response.games;
		const game = games.find((g) => g.slug === slug);

		return {
			status: 200,
			props: {
				title: game?.name ?? 'No Game'
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
</script>

<h3>{title}</h3>
