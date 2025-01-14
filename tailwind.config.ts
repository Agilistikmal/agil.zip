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
				celeste: '#B9FAF8',

				dark: '#1A1A2E'
			},
			fontFamily: {
				lexend: 'Lexend'
			},
			animation: {
				'gradient-x': 'gradient-x 30s ease infinite',
				'gradient-y': 'gradient-y 30s ease infinite',
				'gradient-xy': 'gradient-xy 30s ease infinite'
			},
			keyframes: {
				'gradient-y': {
					'0%, 100%': {
						'background-size': '400% 400%',
						'background-position': 'center top'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'center center'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'gradient-xy': {
					'0%, 100%': {
						'background-size': '400% 400%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			}
		}
	},

	plugins: [typography]
} satisfies Config;
