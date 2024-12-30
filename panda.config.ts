import { defineConfig } from '@pandacss/dev'

const theme = {
  tokens: {
    colors: {
      white: { value: '#fcfcfc' },
      black: { value: '#171717' },
      gray: { value: '#e5e5e5' },
      dark: { value: '#262626' },
      blackgray: { value: '#737373' },
      lightdark: { value: '#a3a3a3' },
      primarylight: { value: '#e20f60' },
      primarydark: { value: '#f68da7' },
    },
  },
  semanticTokens: {
    colors: {
      bg: {
        value: { base: '{colors.white}', _dark: '{colors.black}' },
        description: 'Background color',
      },
      bgSecond: {
        value: { base: '{colors.gray}', _dark: '{colors.dark}' },
        description: 'Alternate background color',
      },
      text: {
        value: { base: '{colors.black}', _dark: '{colors.white}' },
        description: 'Text color',
      },
      textSecond: {
        value: { base: '{colors.blackgray}', _dark: '{colors.lightdark}' },
        description: 'Alternate background color',
      },
      primary: {
        value: { base: '{colors.primarylight}', _dark: '{colors.primarydark}' },
        description: 'Primary color',
      },
    },
  },
  extends: {
    keyframes: {
      spin: {
        to: { transform: 'rotate(360deg)' },
      },
    },
  },
}

const globalCss  = {
  'h1': {
    'font-size': '1.8rem',
    'font-weight': '700',
    'margin': '36px 0 18px',
    'line-height': '1.5',
  },
  'h2': {
    'font-size': '1.4rem',
    'font-weight': '700',
    'margin': '60px 0 20px',
    'position': 'relative',
    'padding-left': '40px',
    '&::before': {
      'content': '"##"',
      'position': 'absolute',
      'left': '0',
      'color': 'primary',
      'font-weight': '900',
    }
  },
  'h3': {
    'font-size': '1.2rem',
    'font-weight': '700',
    'margin': '40px 0 20px',
  },
  'h4': {
    'font-size': '1.1rem',
    'font-weight': '700',
    'margin': '16px 0 10px',
  },
  'h5': {
    'font-size': '1rem',
    'font-weight': '700',
    'margin': '8px 0 6px',
  },
  'p': {
    'font-size': '0.95rem',
    'line-height': '1.7',
    'margin': '0 0 20px',
  },
  'a': {
    'color': 'primary',
    'font-weight': '700',
    'text-decoration': 'none',
    '&:hover': {
      'text-decoration': 'underline',
    }
  },
  'pre': {
    'margin': '16px 0',
    'padding': '16px',
    'border-radius': '6px',
    'max-width': '100%',
    'code': {
      'padding': '0',
    }
  },
  'hr': {
    'margin': '16px 0'
  },
  'code' : {
    'font-family': `Consolas, 'Courier New', Courier, Monaco, monospace`,
    'font-size': '0.9rem',
    'padding': '2px 4px',
    'border-radius': '4px',
    'background-color': '#24292e',
    'color': '#e1e4e8'
  },
  'blockquote': {
    'margin': '-8px 0 8px',
    'padding': '4px 16px',
    'border-left': '4px solid #7d8590',
    'color': '#7d8590',
    'p': {
      'margin': '0',
      'padding': '0 0 0 16px',
    }
  },
  'ul': {
    'padding-left': '25px',
    'line-height': '1.8',
    'list-style-type': 'disc',
    'ul': {
      'list-style-type': 'circle',
      'ul': {
        'list-style-type': 'square',
        'ul': {
          'list-style-type': 'circle'
        }
      }
    }
  },
  'ol': {
    'padding-left': '25px',
    'list-style-type': 'decimal'
  },
}

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,astro}',
    './pages/**/*.{js,jsx,ts,tsx,astro}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: theme,

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss: globalCss,
})
