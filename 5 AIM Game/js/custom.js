const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeElement = document.querySelector('#time');
const board = document.querySelector('#board');
const restartBtn = document.querySelector('#restartBtn');
const resultBtn = document.querySelector('#resultBtn');
const resultPopUp = document.querySelector('#resultPopUp');
const closePopUp = document.querySelector('#closePopUp');
const bluredScreen = document.querySelector('.bluredScreen');
const nextStep = document.querySelector('#nextStep');

let time = 0;
let score = 0;
const colors = ['orange', 'green', 'blue', 'white', 'yellow', 'violet', 'purple', 'red', 'pink'];

startBtn.addEventListener('click', (event) => {
    event.preventDefault();

    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up')

        startGame()
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

restartBtn.addEventListener('click', (event) => {
    event.preventDefault();

    location.reload()
})

let isVisible = false;
resultBtn.addEventListener('click', () => {
    if( !isVisible ){
        board.classList.add('hide');
        nextStep.style.display = 'none';

        resultPopUp.classList.add('active-result-popup')
        isVisible = true;
    } else{
        resultPopUp.classList.remove('active-result-popup')
        isVisible = false;
    }
})

closePopUp.addEventListener('click', () => {
    board.classList.remove('hide');
    nextStep.style.removeProperty('display');
    finishGame()

    resultPopUp.classList.remove('active-result-popup')
    isVisible = false;
})



function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if(time === 0){
        finishGame()
    } else{
        let current = --time;
        if(current < 10){
            current = `0${current}`
        }
        setTime(current)
    }
}


function setTime(value) {
    timeElement.innerHTML = `00:${value}`
}

function finishGame() {
    timeElement.parentNode.classList.add('hide')
    restartBtn.style.display = 'block';
    resultBtn.style.display = 'block';

    board.innerHTML = `<h1>You are very good! </br>
    Your score - <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    let color = getRandomColor();

    const circle = document.createElement('div');
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`
    circle.style.background = `linear-gradient(90deg, ${color} 0%, ${color} 47%, ${color} 100%)`
    circle.classList.add('circle');

    randomCirclePosition(circle)
    board.append(circle);
}

function randomCirclePosition(circle) {
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${x}px`;
    circle.style.left = `${y}px`;
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}