/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-minmax': 'repeat(auto-fill, minmax(384px, 1fr))',
      },
      screens: {
        'xs': '300px',
        ...defaultTheme.screens,
      },
      animation: {
        topLeft: "leftToRight linear 7s infinite alternate,topToBottom linear 17s infinite alternate",
        topRight: "rightToLeft linear 5s infinite alternate,topToBottom linear 12s infinite alternate",
        bottomLeft: "leftToRight linear 8s infinite alternate,bottomToTop linear 10s infinite alternate",
        bottomRight: "rightToLeft linear 5s infinite alternate,bottomToTop linear 7s infinite alternate",

        middleTop: "middleRightToLeft linear 8s infinite alternate, middleTopToBottom linear 7s infinite alternate",
        middleBottom: "middleRightToLeft linear 8s infinite alternate, middleBottomToTop linear 7s infinite alternate",
        rotate: "rotate 3s linear infinite",
        ["infinite-slider"]: "infiniteSlider 15s linear infinite"
      },
      keyframes: {        
        topToBottom: {
          "0%, 100%": {
            top:0
          },
          "50%": {
            top: "calc(100vh - var(--ball-width))"
          }
        },

        bottomToTop: {
          "0%": {
            bottom:0
          },
          "50%": {
            bottom: "calc(100vh - var(--ball-width))"
          },
          "100%": {
            bottom:0
          }
        },
        
        leftToRight: {
          "0%": {
            left: 0
          },        
          "100%": {
            left: "calc(100vw - var(--ball-width))"
          }
        },

        rightToLeft: {
          "0%": {
            right: 0
          },        
          "100%": {
            right: "calc(100vw - var(--ball-width))"
          }
        },

        middleTopToBottom: {
          "0%": {
            top:0
          },
          "50%": {
            top: "calc(100vh - var(--ball-width))"
          },
          "100%": {
            top:0
          }
        },

        middleBottomToTop: {
          "0%": {
            bottom:-10
          },
          "50%": {
            bottom: "calc(100vh - var(--ball-width))"
          },
          "100%": {
            bottom:-10
          }
        },

        middleRightToLeft: {
          "0%": {
            right: "var(--rightPosition)"
          },        
          "50%": {
            right: "calc(100vw - var(--ball-width))"
          },
          "100%": {
            right: 0
          }
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 4))",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

