/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                'custom-width': 'calc(100vw - 40%)',
            },
        },
    },
    plugins: [],
};
