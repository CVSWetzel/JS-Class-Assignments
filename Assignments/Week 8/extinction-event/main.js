
function applyStrikeThrough(element) {
    element.style.textDecoration = 'line-through';
}

function changeOpacity(element, opacity) {
    element.style.opacity = opacity;
}


function changeWidth(element, width) {
    element.style.width = width;
}

function applyEffects(elements, effectFunction) {
    elements.forEach(element => {
        effectFunction(element);
    });
}


const strikeThroughItems = document.querySelectorAll('ol li');

applyEffects(strikeThroughItems, applyStrikeThrough);


const eraseListItems = document.querySelectorAll('ul li');

applyEffects(eraseListItems, element => changeOpacity(element, 0));


const dinosaurImages = document.querySelectorAll('.image-container img');

applyEffects(dinosaurImages, element => changeWidth(element, '0px'));


function destroyAllEffects() {
    applyEffects(strikeThroughItems, applyStrikeThrough);
    applyEffects(eraseListItems, element => changeOpacity(element, 0));
    applyEffects(dinosaurImages, element => changeWidth(element, '0px'));
}


const destroyAllButton = document.getElementById('destroy-all');
destroyAllButton.addEventListener('click', destroyAllEffects);
