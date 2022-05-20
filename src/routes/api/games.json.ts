export async function get() {
    // Fetch from Google sheets with API key
    return {
        body: {
            games: [
                {
                    slug: "mc",
                    name: "Minecraft"
                },
                {
                    slug: "wow",
                    name: "World of Warcract"
                }
            ]
        }
    };
}