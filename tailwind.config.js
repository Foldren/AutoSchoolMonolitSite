/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./source/templates/*.html",
      './source/templates/components/*.html',
      './source/static/css/*.css',
      './source/*.js',
      './source/static/js/*.js',
  ],
  theme: {
      colors: {
          'black-custom': '#323942',
          'gray-custom': '#848E9C',
          'gray-light-custom': '#f5f5f6',
          'gray-medium-custom': '#ECECFF',
          'lime-custom': '#00AC3C',
          'lime-dark-custom': '#008F32',
          'lime-light-custom': '#DEFDE1',
      },
      extend: {
          screens: {
              'sm-custom': '790px',
              'sm-custom-max': {max: '790px'},
              'sm-custom-2-max': {max: '868px'},
              'md-custom': '992px',
              'md-custom-max': {max: '992px'},
              'lg-custom': '1402px',
              'lg-custom-max': {max: '1402px'},
          },
          fontFamily: {
              'notosans-regular': ["NotoSans-Regular", 'sans-serif'],
              'notosans-medium': ["NotoSans-Medium", 'sans-serif'],
              'notosans-semibold': ["NotoSans-SemiBold", 'sans-serif'],
              'notosans-bold': ["NotoSans-Bold", 'sans-serif'],
              'inter-regular': ["Inter-Regular", 'sans-serif'],
          },
      },
      container: {
          center: true,
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

