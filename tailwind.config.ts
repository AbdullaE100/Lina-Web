import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				xs: '1rem',
				sm: '1.5rem',
				md: '2rem',
			},
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			}
		},
		screens: {
			'xs': '480px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			aspectRatio: {
				'1/1': '1 / 1',
				'4/3': '4 / 3',
				'3/2': '3 / 2',
				'16/9': '16 / 9',
				'2/1': '2 / 1',
				'1/2': '1 / 2',
				'3/4': '3 / 4',
				'9/16': '9 / 16',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				gold: "hsl(var(--gold))",
				"muted-gold": "hsl(var(--muted-gold))",
				"nakheel-blue": "hsl(var(--nakheel-blue))",
			},
			fontFamily: {
				sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
				serif: ["Cormorant", "Georgia", "serif"],
				display: ["Cormorant Garamond", "Georgia", "serif"],
				luxury: ["Cowra", "serif"],
				body: ["Cormorant", "Georgia", "serif"],
				ui: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			fontSize: {
				'display': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '400' }],
				'headline': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
				'title': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
				'subtitle': ['clamp(1.125rem, 3vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '500' }],
				'body': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.6' }],
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1.16' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
				'7xl': ['4.5rem', { lineHeight: '1.05' }],
				'8xl': ['6rem', { lineHeight: '1' }],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem',
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-platinum': 'var(--gradient-platinum)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
			},
			boxShadow: {
				'subtle': '0 1px 2px hsla(var(--primary-hsl), 0.05), 0 1px 3px hsla(var(--primary-hsl), 0.1)',
				'soft': '0 4px 8px hsla(var(--primary-hsl), 0.05), 0 6px 12px hsla(var(--primary-hsl), 0.1)',
				'medium': '0 8px 16px hsla(var(--primary-hsl), 0.05), 0 12px 24px hsla(var(--primary-hsl), 0.1)',
				'elevated': '0 12px 24px hsla(var(--primary-hsl), 0.05), 0 16px 32px hsla(var(--primary-hsl), 0.1)',
				'floating': '0 24px 48px hsla(var(--primary-hsl), 0.1), 0 32px 64px hsla(var(--primary-hsl), 0.2)',
				'gold': '0 4px 24px hsla(var(--gold-hsl), 0.35)',
			},
			transitionTimingFunction: {
				'fluid': 'var(--ease-out-cubic)',
				'smooth': 'var(--ease-in-out-cubic)',
				'spring': 'var(--ease-spring)',
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(60px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'magnetic': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-4px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '0.7' },
					'100%': { transform: 'scale(1)', opacity: '0' }
				},
				'tap-highlight': {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '0.2' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'fade-in-up': 'fade-in-up 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'float': 'float 4s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'magnetic': 'magnetic 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'glow': 'glow 2s ease-in-out infinite',
				'ripple': 'ripple 0.6s cubic-bezier(0.1, 0.4, 0.8, 1) forwards',
				'tap-highlight': 'tap-highlight 0.4s ease-out'
			}
		}
	},
	plugins: [
		animate,
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-balance': {
					'text-wrap': 'balance',
				},
				'.text-pretty': {
					'text-wrap': 'pretty',
				},
				'.hide-scrollbar': {
					'scrollbar-width': 'none',
					'-ms-overflow-style': 'none',
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
				'.touch-callout-none': {
					'-webkit-touch-callout': 'none',
					'user-select': 'none',
				},
				'.tap-highlight-transparent': {
					'-webkit-tap-highlight-color': 'transparent',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
