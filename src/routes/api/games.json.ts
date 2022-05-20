import type { Game } from "$lib/types/Game";

export async function get() {
    // TODO: Fetch from Google sheets with API key (process.env, if needed)

    const games: Game[] = [
        {
            slug: "mc",
            name: "Minecraft"
        },
        {
            slug: "wow",
            name: "World of Warcract"
        }
    ];

    return {
        body: {
            games
        }
    };
}