const slides = document.querySelectorAll('.slide');


function activeElement() {
    for (const slide of slides){
        slide.addEventListener('click', function (){
            deactivateActiveTool()

            this.classList.add('active');
        })
    }

}
activeElement()


function deactivateActiveTool() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}