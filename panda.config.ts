import { defineConfig } from "@pandacss/dev"

const theme = {
  tokens: {
    colors: {
      white: { value: '#fafafa' },
      black: { value: '#171717' },
    }
  },
  semanticTokens: {
    colors: {
      bg: {
        value: { base: '{colors.white}', _dark: '{colors.black}' },
        description: 'Background color'
      },
      text: {
        value: { base: '{colors.black}', _dark: '{colors.white}' },
        description: 'Text color'
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
