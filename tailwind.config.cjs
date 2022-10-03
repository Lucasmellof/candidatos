/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}", "./index.html"],
    daisyui: {
        styled: true,
        themes: [
            {
                dark: {
                    ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
                    'base-100': "#070212",
                    'base-200': "#5014b8",
                    'base-300': "#8968d3",
                },
            }
        ]
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Exo 2"', "Inter", "sans-serif"],
            },
        },
    },
    plugins: [require('daisyui')],
}
