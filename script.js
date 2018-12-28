const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const before = document.querySelector('body::before');
const fill = document.querySelector('.color');
const colorText = document.querySelector('.colorCode');
const save = document.querySelector('.save');


let colors = [];

btn.addEventListener('click', randomColor);


save.addEventListener('click', saveColor);

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

    let btnColor = document.querySelector('.btn2');
    btnColor.classList.remove('btn2__color');
    
    return color;
}


// save active color to array
function saveColor() {
    newColor = colorText.innerHTML;
    
    if (!newColor) {
        console.log('empty');
        return
    } else if (newColor) {
        let newDiv = document.createElement('div');
        let counter = colors.length;

        // used for unique class names
        let colorCount = 'newColor' + counter;

        // add new color to array
        colors.push(newColor);
        console.log(colors);
        
        // create new element
        let listbox = document.querySelector('.listBox');
        listbox.appendChild(newDiv);
        newDiv.setAttribute('class', 'near ' + 'newColor' + counter);
        console.log(colorCount);
        

        // add last value in array to newly created element
        newDiv.innerHTML = colors[colors.length-1];

        // select newly created element
        let colorCountElement = document.querySelector('.' + colorCount);

        // style new element background with newest color
        colorCountElement.style.background = newColor;

        // delete color button
        let deleteBtn = document.createElement('p');
        deleteBtn.setAttribute('class', 'delete');
      

        // click event to delete color from palette
        colorCountElement.appendChild(deleteBtn);
        deleteBtn.addEventListener('contextmenu', function(ev) {
            ev.preventDefault();
            deleteBtn.closest('.near').remove();
            
            if (document.querySelector('.listBox').childNodes.length == 0) {
                body.style.background = '#f7f7f7';
                colorText.innerHTML = '';
                let btnColor = document.querySelector('.btn2');
                btnColor.classList.add('btn2__color');
            };
            return false;
        });

        // display selected color from palette
        deleteBtn.addEventListener('click', function() {
            let grabColor = deleteBtn.parentNode.innerHTML;
            colorText.innerHTML = grabColor;
            let backgroundColor = deleteBtn.parentNode.style.background;
            console.log(backgroundColor);
            body.style.background = backgroundColor;
        })

        // 
    }
}



function mouseDown() {
    fill.classList.add('show');
    fill.style.background = color;
}




// for (let i=10; i >= 0; i--) {
//     const output = document.querySelector('.output');
//     const para = document.createElement('p');   
//     output.appendChild(para);
//     if (i > 9) {
//         para.innerHTML = 'Countdown ' + i;
//     } else if (i < 10 && i > 0 ) {
//         para.innerHTML = i;
//     } else {
//         para.innerHTML = 'Blast Off!';
//     }
// }



const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// let i = 0;

// refused.textContent += ;
// admitted.textContent += ;
