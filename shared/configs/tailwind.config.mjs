import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,mdx}",
        "./public/index.html",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],

    darkMode: "class",

    prefix: "",
    separator: ":",

    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px"
            }
        },

        extend: {
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
                mono: ["Fira Code", "ui-monospace"]
            },

            colors: {
                brand: {
                    DEFAULT: "#2563eb",
                    light: "#3b82f6",
                    dark: "#1e40af"
                }
            }
        }
    },

    safelist: [
        "inline-flex",
        "flex",
        "grid",
        {
            pattern: /(bg|text|border)-(brand|gray|slate)-(50|100|300|500|700|900)/
        }
    ],

    corePlugins: {
        container: true
    },

    plugins: [forms(), typography(), aspectRatio(), containerQueries()]
};

export default config;
