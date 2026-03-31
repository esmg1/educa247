/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        casst: {
          navy: '#0F2742',
          blue: '#1F3F63',
          amber: '#F59E0B',
          success: '#16A34A',
          slate: '#475569',
          ink: '#0F172A',
          mist: '#E2E8F0',
          cloud: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 60px rgba(15, 39, 66, 0.14)',
        float: '0 18px 40px rgba(15, 39, 66, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
