/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				theme1: {
					"primary": "#166534",
					"secondary": "#e8c42e",
					"accent": "#0d9488",
					"neutral": "#374151",
					"base-100": "#111827",
					"info": "#7BBCE5",
					"success": "#12826F",
					"warning": "#EDB940",
					"error": "#991b1b",
				}
			},
			{
				theme2: {
					"primary": "#acac11",
					"secondary": "#107a8b",
					"accent": "#2cb978",
					"neutral": "#064e3b",
					"base-100": "#0a202a",
					"info": "#ADBAEB",
					"success": "#4d7c0f",
					"warning": "#b45309",
					"error": "#be123c",
				}
			}
		]
	},
	theme: {
		extend: {}
	},
	plugins: [require("daisyui")],
}
