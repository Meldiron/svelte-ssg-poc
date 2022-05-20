<script context="module">
	export async function load({ params, fetch }) {
		const slug = params.slug;

		const response = await (await fetch('/api/games.json')).json();
		const game = response.games.find((g) => g.slug === slug);

		return {
			status: 200,
			props: {
				title: game?.name ?? 'No Game'
			}
		};
	}
</script>

<script>
	export let title;
</script>

<h3>{title}</h3>
