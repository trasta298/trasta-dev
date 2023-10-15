import { defineConfig } from '@pandacss/dev'

const theme = {
  tokens: {
    colors: {
      white: { value: '#fafafa' },
      black: { value: '#171717' },
      gray: { value: '#e5e5e5' },
      dark: { value: '#262626' },
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
    }
  }
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
})
