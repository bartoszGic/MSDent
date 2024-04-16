import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/tw-elements-react/dist/js/**/*.js',
	],
	theme: {
		extend: {
			height: {
				calc: 'calc(100lvh - 80px)',
			},
		},
		colors: {
			green: '#02573a',
			lightGreen: '#04a26c',
			light: '#bfbfbf',
			grey: '#d9d9d9',
			white: '#fefefe',
			brokenWhite: '#fafafa',
			dark: '#707070',
			darker: '#303030',
			bronze: '#57021f',
			blue: '#0250a2',
			lightBlue: '#4b7bb5',
			yellow: '#a29b04',
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [require('tw-elements-react/dist/plugin.cjs')],
};
export default config;
