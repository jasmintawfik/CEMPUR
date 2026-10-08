// Finder før/efter-slideren i HTML
const slider = document.getElementById("beforeAfterSlider");

// Registrerer når brugeren bevæger musen over slideren
slider.addEventListener("pointermove", function(event) {

    // Tjekker om brugeren holder musen nede
    if (event.buttons === 1) {

        // Finder sliderens størrelse og placering
        const rect = slider.getBoundingClientRect();

        // Beregner musens position som procent
        const position = ((event.clientX - rect.left) / rect.width) * 100;

        // Opdaterer sliderens position i CSS
        slider.style.setProperty(
            "--pos",
            Math.max(0, Math.min(100, position)) + "%"
        );
    }
});
#E9EBE9