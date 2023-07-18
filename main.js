import ScrollReveal from "scrollreveal";

const hero = document.getElementById("hero");
const gallery = document.getElementById("gallery")
const contact = document.getElementById("contact")
const talles = document.getElementById("talles")

const revealSection = (section) => {
	ScrollReveal().reveal(section, {
		delay: 200, //Lo que tarda en iniciar el efecto
		distance: "500px", // Distancia que recorre el elemento
		duration: 1000, // Duracion dle efecto
		origin: "bottom", // Desde donde aparece el elemento
		reset: false, // Si se debe reiniciar el efecto y volver a ejecutarse
	});
};

const scrollEffectsInit = () => {
	revealSection(hero);
	revealSection(gallery);
	revealSection(contact);
    revealSection(talles)
};


addEventListener("DOMContentLoaded", () => {
    scrollEffectsInit()
})

