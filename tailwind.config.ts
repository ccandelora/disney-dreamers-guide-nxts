import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "page-pattern":
          "url('/seamless-tiling-clouds-gffdcf08bf_1920.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  safelist: ['animate-[tada]', 'animate-[fade-in]'],
}
export default config
