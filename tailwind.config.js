module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4169E1',
          50: '#E0E6FA',
          100: '#CED8F7',
          200: '#ABBCF2',
          300: '#87A1EC',
          400: '#6485E7',
          500: '#4169E1',
          600: '#204ACA',
          700: '#18399A',
          800: '#112769',
          900: '#091539',
        },
        secondary: {
          DEFAULT: '#E8753D',
          50: '#FBEAE1',
          100: '#F9DDCF',
          200: '#F5C3AA',
          300: '#F1A986',
          400: '#EC8F61',
          500: '#E8753D',
          600: '#D45619',
          700: '#A24213',
          800: '#6F2D0D',
          900: '#3D1907',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
