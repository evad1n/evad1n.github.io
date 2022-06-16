type Project = {
    title: string;
    url: string;
    mediaPath: string;
    description: string;
    tools: string[];
};

export const Projects: Record<"big" | "medium" | "small", Project[]> = {
    big: [
        {
            title: "Lexicogn",
            url: "https://play.google.com/store/apps/details?id=evad1n.lexicogn",
            mediaPath: "/images/lexicogn.jpg",
            description:
                "A mobile app to keep track of and study new vocabulary words",
            tools: ["TypeScript", "React Native", "Expo"],
        },
        {
            title: "Lyrical",
            url: "https://spotify-lyrical.netlify.app/",
            mediaPath: "/images/lyrical.png",
            description:
                "Fill in the blanks lyrics game for your current Spotify song",
            tools: ["JavaScript", "Vue", "Python", "Flask"],
        },
        {
            title: "Ballistic",
            url: "https://evad1n.github.io/ballistic-v1",
            mediaPath: "/images/ballistic.png",
            description:
                "A 2-player tank shooter inspired by <a href='https://tanktrouble.com/'>Tank Trouble</a>",
            tools: ["JavaScript", "PixiJS"],
        },
        {
            title: "Life",
            url: "https://evad1n.github.io/life",
            mediaPath: "/images/life.png",
            description: "Conway's Game of Life, with a few additions",
            tools: ["JavaScript", "PixiJS"],
        },
    ],
    medium: [
        {
            title: "2048",
            url: "https://evad1n.github.io/2048",
            mediaPath: "/images/2048.png",
            description: "The classic 2048 game",
            tools: ["JavaScript"],
        },
        {
            title: "Tic-Tac-Toe",
            url: "https://evad1n.github.io/tictactoe",
            mediaPath: "/images/tictactoe.png",
            description: "It's Tic-Tac-Toe. That's it...",
            tools: ["JavaScript"],
        },
        {
            title: "Towers of Hanoi",
            url: "https://evad1n.github.io/towers/",
            mediaPath: "/images/towers.png",
            description: "Towers of Hanoi interactive solver",
            tools: ["JavaScript", "Vue"],
        },
    ],
    small: [
        {
            title: "Clock",
            url: "https://evad1n.github.io/clock",
            mediaPath: "/images/clock.png",
            description: "It's just a clock. It looks nice though",
            tools: ["JavaScript", "p5.js"],
        },
        {
            title: "Drums",
            url: "https://evad1n.github.io/drums",
            mediaPath: "/images/drums.png",
            description: "Play the drums in your browser",
            tools: ["JavaScript"],
        },
    ],
};
