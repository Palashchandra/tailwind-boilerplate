const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                'primary': '#FFAB04',
                'title': '#002226',
                'description': '#002226',
            },
            fontFamily: {
                'primary': ["'Montserrat', sans-serif;"],
                'secondary': ["'Montserrat', sans-serif;"],
            },
            lineHeight: {
                'title': '1.15',
                'title-2': '1.5',
            },
            container: {
                padding: '1rem',
                screens: {
                    sm: "100%",
                    md: "100%",
                    lg: "1024px",
                    xl: "1140px",
                    '2xl': "1200px"
                 }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}