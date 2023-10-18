// Задача о коллекции функций: у вас есть массив функций, напишите код, 
// который вызовет каждую функцию в этом массиве и выведет их порядковый номер. 
// Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другими словами, нужно выполнить следующие шаги:
// Вызвать первую функцию из массива.
// После завершения работы первой функции вызвать вторую функцию.
// После завершения работы второй функции вызвать третью функцию.
// И так далее, пока все функции в массиве не будут вызваны по порядку.

let functions = [
    function1 = () => {
        console.log('выполнение функции 1');
    },
    function2 = () => {
        console.log('выполнение функции 2');
    },
    function3 = () => {
        console.log('выполнение функции 3');
    }
];

functions.forEach((item, i) => {
    item();
    console.log(i + ': ' + item);
});