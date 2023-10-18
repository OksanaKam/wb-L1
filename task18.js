// Подсчитать максимальный объем данных, который можно записать в localStorage 
// вашего браузера.

if (localStorage && !localStorage.getItem('size')) {
    var i = 0;
    try {
        // тестируем до 10 Мб
        for (i = 250; i <= 10000; i += 250) {
            localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
        }
    } catch (e) {
        localStorage.removeItem('test');
        localStorage.setItem('size', i - 250);            
    }
}

console.log(localStorage.getItem('size'));
console.log(localStorage);
