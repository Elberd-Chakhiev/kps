/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/*.{vue,js,ts,jsx,tsx, svg}",
        "./src/**/*.{vue,js,ts,jsx,tsx, svg}",
        "./src/**/**/*.{vue,js,ts,jsx,tsx, svg}",
    ],
    theme: {
        extend: {},
        // colors: {
        //   primary: "#224570",
        //   secondary: "#2A4F7C",
        //   ternary: "#153153",
        //   quaternary: "#BAD9FF",
        // },
        screens: {

            "2xl": { "max": "1920px" },
            "xl": { "max": "1140px" },
            "lg": { "max": "768px" },
            "md": { "max": "539px" },
            "mmd": { "max": "450px" },
            "sm": { "max": "360px" },
            "xm": { "max": "320px" },
            "xmd": { "min": "321px" },

            "2xl": { max: "1919px" },

            xl: { max: "1139px" },

            lg: { max: "767px" },

            md: { max: "539px" },
            mmd: { max: "450px" },

            sm: { max: "360px" },
            xm: { max: "319px" },
            xmmin: { min: "320px" },
            xmmd: { min: "449px" },
            lgmin: { min: "768px" },
            xlmin: { min: "1140px" },
            "2xlmin": { min: "1920px" },

        },
    },
    plugins: [],
};