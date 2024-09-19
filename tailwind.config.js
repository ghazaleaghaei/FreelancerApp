/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "color1": "#925bf0",
                "color2": "#086375",
                "color3": "#470622",
            },
        },
    },
    plugins: [],
}
