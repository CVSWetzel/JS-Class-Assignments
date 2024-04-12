// Challenge 1 solution
const messWithMeWord = document.querySelector('span.mess-with-me');
messWithMeWord.addEventListener('click', makeOrange);

function makeOrange() {
    messWithMeWord.style.color = 'orange';
    messWithMeWord.style.fontSize = '40px';
}

// Challenge 2 solution
const triceratops = document.querySelector('#hide-me');
triceratops.addEventListener('click', giveRedBorder);

function giveRedBorder() {
    triceratops.style.border = '3px solid red';
    triceratops.style.width = '324px';
}

// Challenge 3 solution
const feathered = document.querySelector('#feathers');
feathered.addEventListener('click', makeTransparent);

function makeTransparent() {
    feathered.style.opacity = '0.5'; // Set opacity as a string
}

// Challenge 4 solution
const toggle = document.querySelector('#toggle-background');
const row = document.querySelector('#row');
toggle.addEventListener('click', toggleRowBackground);

function toggleRowBackground() {
    let currentColor = row.style.backgroundColor;
    // Switch to a color of your preference if the current color is not set or is white
    row.style.backgroundColor = currentColor && currentColor !== 'white' ? 'lightblue' : 'white';
}

// Challenge 5 solution
const ankylosaur = document.querySelector('#biggify');
ankylosaur.addEventListener('mouseover', toggleSize);
ankylosaur.addEventListener('mouseout', toggleSize);

function toggleSize() {
    if (ankylosaur.style.width === '200px') {
        ankylosaur.style.width = '162px';
    } else {
        ankylosaur.style.width = '200px';
    }
    // Add CSS transition for smoother size change
    ankylosaur.style.transition = 'width 0.3s ease';
}
