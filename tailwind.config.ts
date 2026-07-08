import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#ECE5DF',
        'sand-deep': '#E2D9D1',
        ink: '#16171b',
        muted: '#74757c',
        line: '#e7e3df',
        highlight: '#FCE588',
        accent: '#E8368F',
        card: {
          blue: '#BFE8FB',
          teal: '#BFF1DA',
          pink: '#FFC9DE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        shell: '1080px',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
