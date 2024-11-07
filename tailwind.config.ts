import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				// 1
				night: '#0C090D',
				amaranth: '#E01A4F',
				tomato: '#F15946',
				saffron: '#F9C22E',
				moonstone: '#53B3CB',

				// 2
				grape: '#6F2DBD',
				amethyst: '#A663CC',
				wisteria: '#B298DC',
				colombiablue: '#B8D0EB',
				celeste: '#B9FAF8'
			},
			fontFamily: {
				lexend: 'Lexend'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
