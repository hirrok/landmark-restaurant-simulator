/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ember: {
          ink:      '#1A1008',
          warm:     '#2C1810',
          mid:      '#6B3A2A',
          dim:      '#9B6B5A',
          muted:    '#C4A090',
          cream:    '#FAF6F0',
          surface:  '#FFFFFF',
          raised:   '#F5EDE4',
          border:   '#E8D5C4',
          amber:    '#C27A2B',
          amberHov: '#A66523',
          amberBg:  'rgba(194,122,43,0.08)',
          green:    '#3A6B3A',
          greenBg:  'rgba(58,107,58,0.08)',
          red:      '#8B2020',
          redBg:    'rgba(139,32,32,0.08)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Lato', '"Helvetica Neue"', 'sans-serif'],
        mono:    ['"DM Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
};
