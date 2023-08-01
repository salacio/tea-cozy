/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./index.html"],
	theme: {
		colors: {
			seashell: "seashell",
			black: "black",
		},
		fontFamily: {
			helvetica: "helvetica",
		},
		extend: {
			backgroundImage: {
				mission: "url('../src/img-mission-background.jpg')",
				locations: "url('../src/img-locations-background.jpg')",
			},
		},
	},
	plugins: [],
};
