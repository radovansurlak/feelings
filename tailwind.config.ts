import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [daisyui],
	daisyui: {
		themes: ["light"],
	},
} satisfies Config;
