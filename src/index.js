import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
]

let backgroundInterval = null;
const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),    
}

refs.start.addEventListener('click', colorStart);
refs.stop.addEventListener('click', colorStop);

refs.stop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function bacgroundSwich() {
    return refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]

};


function colorStart() {
    backgroundInterval = setInterval(bacgroundSwich, 1000);
    refs.stop.disabled = false;
    refs.start.disabled = true;
};

function colorStop() {
    clearInterval(backgroundInterval);
    refs.stop.disabled = true;
    refs.start.disabled = false;
    return refs.body.style.backgroundColor = '#fff';
  
}

