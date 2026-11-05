export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1F1C2F',
          soft: '#2A2740',
          line: '#3A3652',
        },
        accent: {
          DEFAULT: '#D92D66',
          light: '#F27BA0',
        },
        lilac: '#B3ADE8',
        mist: '#F3F2F9',
        body: '#4A475C',
        muted: '#6B6880',
        line: '#E7E5EF',
        canvas: '#ECEBF1',
      },
    },
  },
}
