// Задача: Создать и добавить элемент с использованием шаблонов: Напишите 
// функцию, которая создает новый элемент с использованием шаблонов 
// (например, с помощью тега <template>) и добавляет его в DOM.

function createElement() {
    return document
        .querySelector('#template')
        .content
        .querySelector('#text')
        .cloneNode(true);
}
