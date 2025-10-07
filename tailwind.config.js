const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./**/*.tsx'],
  darkMode: ['class', 'class'],
  corePlugins: {
    container: false,
  },
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#fffff9',
  				'100': '#ffffad',
  				'200': '#fffe75',
  				'300': '#fffe2d',
  				'400': '#fffe0f',
  				'500': '#efee00',
  				'600': '#d0d000',
  				'700': '#b2b100',
  				'800': '#939300',
  				'900': '#757400',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			black: {
  				'50': '#707070',
  				'100': '#424242',
  				'200': '#323232',
  				'300': '#242424',
  				'400': '#181818',
  				'500': '#0a0a0a',
  				'600': '#040404',
  				'700': '#000'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			sm: '2rem'
  		}
  	},
  	fontFamily: {
  		serif: [
  			'Bitter',
  			'serif'
  		],
  		sans: [
  			'SF Pro Text',
  			'Inter',
  			'system-ui',
  			'BlinkMacSystemFont',
  			'Segoe UI',
  			'Roboto',
  			'Ubuntu'
  		],
  		monospace: [
  			'`SF Mono`',
  			'`ui-monospace`',
  			'`Monaco`',
  			'Monospace'
  		]
  	}
  },
  plugins: [customContainerPlugin, plugin(ellipisfyPlugin), require("tailwindcss-animate")],
};

function ellipisfyPlugin({ addUtilities }) {
  const styles = {
    '.ellipsify': {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'pre',
    },
  };

  addUtilities(styles);
}

function customContainerPlugin({ addComponents }) {
  addComponents({
    '.container': {
      '@screen lg': {
        maxWidth: '1024px',
      },
      '@screen xl': {
        maxWidth: '1166px',
      },
    },
  });
}
