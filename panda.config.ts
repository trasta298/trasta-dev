import { defineConfig } from "@pandacss/dev"

const theme = {
  tokens: {
    colors: {
      red: { value: '#EE0F0F' },
      green: { value: '#0FEE0F' },
      darkred: { value: '#660000' },
      darkgreen: { value: '#006600' },
      white: { value: '#fafafa' },
      dark: { value: '#171717' },
    }
  },
  semanticTokens: {
    colors: {
      danger: {
        value: { base: '{colors.red}', _dark: '{colors.darkred}' },
        description: 'Dangerous color'
      },
      success: {
        value: { base: '{colors.green}', _dark: '{colors.darkgreen}' },
        description: 'Success color'
      },
      bg: {
        value: { base: '{colors.white}', _dark: '{colors.dark}' },
        description: 'Background color'
      },
    }
  }
}


export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: theme,

    // The output directory for your css system
    outdir: "styled-system",

})
