/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        educa: {
          red: '#E2482F',
          orange: '#FF8A00',
          green: '#2F8F53',
          charcoal: '#16181A',
          'charcoal-soft': '#23282C',
          sand: '#F5ECDE',
          cream: '#FFF7EB',
          rust: '#7C2E21',
          stone: '#675A4F',
          navy: '#1A1F24',
          blue: '#48545E',
          amber: '#FF8A00',
          success: '#2F8F53',
          slate: '#5F544B',
          ink: '#181512',
          mist: '#E4D6C1',
          cloud: '#FFFAF2',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 26px 60px rgba(24, 21, 18, 0.14)',
        float: '0 14px 32px rgba(24, 21, 18, 0.12)',
        edge: '0 10px 24px rgba(226, 72, 47, 0.14)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(124, 46, 33, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 46, 33, 0.08) 1px, transparent 1px)',
        mesh: 'radial-gradient(circle at top, rgba(255, 138, 0, 0.24), transparent 36%), radial-gradient(circle at 80% 18%, rgba(47, 143, 83, 0.14), transparent 26%), radial-gradient(circle at 20% 88%, rgba(226, 72, 47, 0.16), transparent 24%)',
        stripes: 'repeating-linear-gradient(-55deg, rgba(226, 72, 47, 0.12) 0 18px, rgba(255, 138, 0, 0.12) 18px 36px, transparent 36px 54px)',
      },
    },
  },
  plugins: [],
}
