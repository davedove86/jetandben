/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#f2c165',
				secondary: '#231f1e',
				'grey-bg': '#f2f2f2',
				'black-gradient': 'linear-gradient(180deg, #000000 0%, #000000 100%)',
				'white-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)',
			},
		},
	},
	plugins: [],
};
