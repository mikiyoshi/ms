/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./src/*.{js,jsx,ts,tsx}", "./src/*/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"protest-riot-regular": ["Protest Riot", "sans-serif"],
				"patrick-hand-regular": ["Patrick Hand", "cursive"],
			},
			colors: {
				primary: {
					100: "#def1de",
					200: "#bee3be",
					300: "#9dd49d",
					400: "#7dc67d",
					500: "#5cb85c",
					600: "#4a934a",
					700: "#376e37",
					800: "#254a25",
					900: "#122512",
				},
				secondary: {
					100: "#e2f0f8",
					200: "#c5e1f1",
					300: "#a7d3ea",
					400: "#8ac4e3",
					500: "#6db5dc",
					600: "#5791b0",
					700: "#416d84",
					800: "#2c4858",
					900: "#16242c",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
