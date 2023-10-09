/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		screens: {
			xs: "375px",
			sm: "576px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
			xxl: "1440px",
		},

		extend: {
			colors: {
				primary: {
					background: "#1c1c1c",
					green: "#18c474",
				},
			},

			backgroundImage: {
				"hero-background": "url('/img/hero-background.png')",
			},
		},
	},
	plugins: [],
};
