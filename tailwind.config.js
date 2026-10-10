/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        educa: {
          red: '#0F7548',
          orange: '#F4CE19',
          green: '#168F52',
          charcoal: '#142840',
          'charcoal-soft': '#203C50',
          sand: '#F1F6F2',
          cream: '#F7FAF7',
          rust: '#0F7548',
          stone: '#526571',
          navy: '#142840',
          blue: '#34556B',
          amber: '#F4CE19',
          success: '#168F52',
          slate: '#526571',
          ink: '#142840',
          mist: '#DBE6DE',
          cloud: '#FFFFFF',
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
