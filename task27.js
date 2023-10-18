// Задача: Добавить анимацию для элемента: Напишите функцию, которая добавляет 
// анимацию для элемента на веб-странице, например, плавное изменение его 
// положения или размера.

// взяла создание элемента и добавление стилей из задания 25
function createElementAndCss(tag, style) {
    const element = document.createElement(tag);
    document.body.append(element);
    for (const property in style)
        element.style[property] = style[property];
}

createElementAndCss('div', {
    'width': '100px',
    'height': '100px',
    'background-color': 'yellow'
});

// функция которая изменяет стили
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}
const el = document.querySelector('div');
const text = document.querySelector('p');

// применила функцию при клике на текст
text.addEventListener('click', () => {
    css(el, {
        'width': '50px',
        'height': '50px',
        'background-color': 'green',
        'transition': 'all .5s linear'
    });
})