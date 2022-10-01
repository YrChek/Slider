let ram, ramIndex;
const collectionItems = Array.from(document.querySelectorAll('.slider__item'));
const collectionDot = Array.from(document.querySelectorAll('.slider__dot'));
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

function removeClass() {
    ram.classList.remove('slider__item_active');
    collectionDot[ramIndex].classList.remove('slider__dot_active')
}

function addClass (next) {
    ram = next;
    next.classList.add('slider__item_active');
    ramIndex = collectionItems.indexOf(next);
    collectionDot[ramIndex].classList.add('slider__dot_active');
}

collectionItems.forEach((el) => {
    if (el.matches('.slider__item_active')) {
        ram = el;
        ramIndex = collectionItems.indexOf(ram)
        collectionDot[ramIndex].classList.add('slider__dot_active')
    };
})

arrowPrev.onclick = () => {
    removeClass();
    if (ram.previousElementSibling) {
        let prev = ram.previousElementSibling
        addClass(prev)
    } else {
        addClass(collectionItems[4])
    }
}

arrowNext.onclick = () => {
    removeClass();
    if (ram.nextElementSibling) {
        let next = ram.nextElementSibling
        addClass(next)
    } else {
        addClass(collectionItems[0])
    }
}

collectionDot.forEach((el) => {
    el.onclick = () => {
        removeClass()
        ramIndex = collectionDot.indexOf(el);
        ram = collectionItems[ramIndex];
        ram.classList.add('slider__item_active');
        collectionDot[ramIndex].classList.add('slider__dot_active');
    }
})