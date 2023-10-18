// Задача о замыканиях: напишите функцию, которая будет принимать массив функций 
// и возвращать новую функцию, которая вызывает каждую функцию в этом массиве 
// и возвращает массив результатов, полученных после вызова каждой функции.


let functions = [
    function1 = () => {
        return '1';
    },
    function2 = () => {
        return '2';
    },
    function3 = () => {
        return '3';
    }
];

function closure(array) {
    return function() {
        return array.map(func =>  {
            return func()
        });
    }
}

const callClosure = closure(functions)

console.log(callClosure());