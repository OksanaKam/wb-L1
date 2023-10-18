// Разработать функцию, изменяющую окончание слов в зависимости от падежа. 
// Например:
// 112 сообщения
// 12 сообщений
// 1 сообщение
// 1024 пользователя
// 1026 пользователей
// 121 пользователь
// Функцию надо упаковать в модуль.

function setCase(num, textOne, textTwo, textThree) {
    let n = Math.abs(num);
    n %= 100;
    if (n >= 5 && n <=20) {
        return num + ' ' + textThree;
    }
    n %= 10;
    if (n === 1) {
        return num + ' ' + textOne;
    }
    if (n >= 2 && n <= 4) {
        return num + ' ' + textTwo;
    }
    return num + ' ' + textThree;
}

export default setCase;