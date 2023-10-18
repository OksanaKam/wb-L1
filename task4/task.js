// Разработать функцию, изменяющую окончание слов в зависимости от падежа. 
// Например:
// 112 сообщения
// 12 сообщений
// 1 сообщение
// 1024 пользователя
// 1026 пользователей
// 121 пользователь
// Функцию надо упаковать в модуль.

import setCase from "./task4.js";

function getMessage(num) {
    return setCase(num, 'сообщение', 'сообщения', 'сообщений');
}

function getUser(num) {
    return setCase(num, 'пользователь', 'пользователя', 'пользователей');
}

console.log(getMessage(112));
console.log(getMessage(12));
console.log(getMessage(1));

console.log(getUser(1024));
console.log(getUser(1026));
console.log(getUser(121));