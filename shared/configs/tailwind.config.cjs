/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,mdx}",
        "./public/index.html",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],

    darkMode: "class",

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
                mono: ["Fira Code", "ui-monospace", "SFMono-Regular"]
            },

            colors: {
                brand: {
                    DEFAULT: "#2563eb",
                    light: "#3b82f6",
                    dark: "#1e40af"
                }
            },

            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.800"),
                        a: { color: theme("colors.brand.DEFAULT"), fontWeight: "500" }
                    }
                },
                dark: {
                    css: {
                        color: theme("colors.gray.100"),
                        a: { color: theme("colors.brand.light") }
                    }
                }
            }),

            spacing: {
                18: "4.5rem",
                22: "5.5rem",
                128: "32rem"
            },

            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem"
            }
        }
    },

    safelist: [
        "text-center",
        "text-left",
        "text-right",
        {
            pattern: /(bg|text|border)-(brand|red|green|blue|gray)-(100|200|400|600|800)/
        }
    ],

    corePlugins: {
        preflight: true
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/container-queries")
    ]
};
