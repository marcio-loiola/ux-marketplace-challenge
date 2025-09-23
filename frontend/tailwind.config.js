/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#1E293B',
        // A paleta de cinza padrão do Tailwind já inclui 400 e 700.
        // Adicionando-os aqui apenas para referência, mas não é necessário.
        gray: {
          400: '#9ca3af',
          700: '#374151',
        },
        background: '#ffffff', // Fundo branco padrão
        foreground: '#1E293B', // Texto padrão
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
