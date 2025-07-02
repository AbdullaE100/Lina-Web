import type { Config } from "tailwindcss";

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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					foreground: 'hsl(var(--gold-foreground))',
					dark: 'hsl(var(--gold-dark))'
				},
				stone: {
					DEFAULT: 'hsl(var(--stone))',
					foreground: 'hsl(var(--stone-foreground))',
					dark: 'hsl(var(--stone-dark))'
				}
			},
			fontFamily: {
				serif: ['Playfair Display', 'Georgia', 'serif'],
				body: ['Lato', 'system-ui', '-apple-system', 'sans-serif'],
				sans: ['Lato', 'system-ui', '-apple-system', 'sans-serif'],
			},
			fontSize: {
				'display': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
				'headline': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'title': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'body-lg': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-luxury': 'var(--gradient-luxury)',
				'gradient-hero-overlay': 'var(--gradient-hero-overlay)',
				'gradient-section': 'var(--gradient-section)',
			},
			boxShadow: {
				'xs': 'var(--shadow-xs)',
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'xl': 'var(--shadow-xl)',
				'luxury': 'var(--shadow-luxury)',
				'gold': 'var(--shadow-gold)',
			},
			transitionTimingFunction: {
				'luxury': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
				'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
				'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)',
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
				'glow': 'glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
