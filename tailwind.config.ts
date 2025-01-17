import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	lightMode: "selector",
	plugins: [daisyui],
	daisyui: {
		themes: ["light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
	},
} satisfies Config;
