const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const before = document.querySelector('body::before');
const fill = document.querySelector('.color');
const colorText = document.querySelector('.colorCode');


btn.addEventListener('click', randomColor);


// create random color
function randomColor() {
    let values = '0123456789ABCDEF';

    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * 16)];
    }
    fill.classList.add('show');
    fill.style.background = color;
    colorText.innerHTML = color;
    setTimeout(function() {
        fill.classList.remove('show');
    }, 400);
    setTimeout(function() {
        body.style.background = color;
    }, 400);
    
    return color;
}



function mouseDown() {
    fill.classList.add('show');
    fill.style.background = color;
}
