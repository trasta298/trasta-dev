import { defineConfig } from '@pandacss/dev'

const theme = {
  tokens: {
    colors: {
      white: { value: '#fafafa' },
      black: { value: '#171717' },
      gray: { value: '#e5e5e5' },
      dark: { value: '#262626' },
      primary: { value: '#f59e0b' },
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
    'font-size': '2.2rem',
    'font-weight': '700',
    'margin': '30px 0 24px',
    'line-height': '1.7',
    'border-bottom': {
      'base': '1px solid gray',
      '_dark': '1px solid dark',
    }
  },
  'h2': {
    'font-size': '1.8rem',
    'font-weight': '700',
    'margin': '20px 0 14px',
  },
  'h3': {
    'font-size': '1.4rem',
    'font-weight': '700',
    'margin': '18px 0 12px',
  },
  'h4': {
    'font-size': '1.3rem',
    'font-weight': '700',
    'margin': '16px 0 10px',
  },
  'h5': {
    'font-size': '1.2rem',
    'font-weight': '700',
    'margin': '8px 0 6px',
  },
  'p': {
    'font-size': '1rem',
    'line-height': '1.6',
    'margin': '0 0 16px',
  },
  'a': {
    'color': 'primary',
    'text-decoration': 'none',
  },
  'pre': {
    'margin': '16px 0',
    'padding': '16px',
    'border-radius': '6px',
  },
  'code' : {
    'font-family': `Consolas, 'Courier New', Courier, Monaco, monospace`,
  },
  'ul' : {
    'padding-left': '25px',
    'list-style-type': 'disc'
  },
  'ol' : {
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
