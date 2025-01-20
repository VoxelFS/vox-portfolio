/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"cgrey": "#454545",
				"rquartz": "#F7CAC9",
				"odark": "#363434",
				"opink": "#E8C4B8"
			}
		},
	},
	plugins: [],
	darkMode: "class",
}
