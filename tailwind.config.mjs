/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily: {
		primary: "Archivo, sans-serif",
	},
	extend: {
		colors: {
		  primary: "#ffffff",
		  accent: {
			DEFAULT: "#0067FF",
		  },
		  text: {
			dark: "#1D2939",
		  },
		  bgheader: "#F7F8FC",
		},
	  },
  },
  plugins: [require("tailwindcss-animate")],
};
