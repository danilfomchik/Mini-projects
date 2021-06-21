const mainSlide = document.querySelector('.main-slide');
const mainSlides = document.querySelectorAll('.main-slide div').length;

const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

let activeSlideIndex = 0;

sidebar.style.top = `-${(mainSlides - 1) * 100}vh`

upButton.addEventListener('click', () => {
    changeSlide('up')
})

downButton.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp'){
        changeSlide('up')
    } else if(event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex === mainSlides){
            activeSlideIndex = 0;
        }
    } else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = mainSlides - 1;
        }
    }

    const height = container.clientHeight;

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
}