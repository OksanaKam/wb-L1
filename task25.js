// Задача: Создать и добавить стиль для элемента: Напишите функцию, 
// которая создает новый элемент, добавляет его в DOM и устанавливает для него 
// стиль с помощью CSS.

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
