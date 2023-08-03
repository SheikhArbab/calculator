/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {


    screens: {
      'mobile': '100px',
      // => @media (min-width: 640px) { ... }

      'tab': '600px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {

colors: {
"color-primary": "#e3f9ff",
"color-cal": "#3a4452"

}

    },

    boxShadow: {

"btnShadow": "-8px -8px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)",
"calShadow": "0px 3px 15px rgba(113, 115, 119, 0.5)"
    }
  },
  plugins: [],
}

