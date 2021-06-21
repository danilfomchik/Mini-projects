const slides = document.querySelectorAll('.slide');

function slidesPlugin(activeSlide) {
    slides[activeSlide].classList.add('active');
}
slidesPlugin(1)

function addActiveElement() {
    for (const slide of slides){
        slide.addEventListener('click', function (){
            deactivateActiveTool()

            this.classList.add('active');
        })
    }

}
addActiveElement()

function deactivateActiveTool() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}