const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

// ============================================================================
// BRAND COLORS - Change these to swap entire theme easily
// ============================================================================
const brandColors = {
  // PRIMARY: Main CTAs, links, key brand actions
  primary: colors.blue,

  // ACCENT: Badges, highlights, secondary interactive elements
  accent: colors.purple,

  // NEUTRAL: Text, borders, backgrounds (gray scale)
  neutral: colors.slate,
};

// ============================================================================
// SEMANTIC COLORS - For UI states and feedback
// ============================================================================
const semanticColors = {
  success: colors.green,
  warning: colors.amber,
  error: colors.red,
  info: colors.sky,
};

module.exports = {
  content: ['./**/*.tsx'],
  darkMode: 'class',
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        // Brand colors with full scale (50-950)
        primary: brandColors.primary,
        accent: brandColors.accent,
        neutral: brandColors.neutral,

        // Semantic colors with full scale
        success: semanticColors.success,
        warning: semanticColors.warning,
        error: semanticColors.error,
        info: semanticColors.info,

        // shadcn/ui compatibility - HSL-based tokens
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // Gradient presets for easy customization
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-radial':
          'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    fontFamily: {
      serif: ['Bitter', 'serif'],
      sans: [
        'SF Pro Text',
        'Inter',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Ubuntu',
      ],
      monospace: ['SF Mono', 'ui-monospace', 'Monaco', 'Monospace'],
    },
  },
  plugins: [
    customContainerPlugin,
    plugin(ellipsifyPlugin),
    plugin(gradientPlugin),
    require('tailwindcss-animate'),
  ],
};

// ============================================================================
// CUSTOM PLUGINS
// ============================================================================

function ellipsifyPlugin({ addUtilities }) {
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

// Gradient utilities for easy theme changes
function gradientPlugin({ addUtilities }) {
  const gradients = {
    '.gradient-hero': {
      '@apply bg-gradient-to-r from-primary-500 via-accent-500 to-indigo-500':
        {},
    },
    '.gradient-hero-text': {
      '@apply bg-gradient-to-r from-primary-500 via-accent-500 to-indigo-500 bg-clip-text text-transparent':
        {},
    },
    '.glow-primary': {
      boxShadow: '0 0 120px rgba(59, 130, 246, 0.3)',
    },
    '.glow-accent': {
      boxShadow: '0 0 120px rgba(168, 85, 247, 0.3)',
    },
  };
  addUtilities(gradients);
}
