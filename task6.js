// Задача о сортировке объектов: у вас есть массив объектов вида 
// { name: 'John', age: 25 }. 
// Напишите код, который сортирует этот массив по возрастанию возраста, 
// а при равных возрастах сортирует по алфавиту по полю name.

const people = [
    { name: 'John', age: 25 },
    { name: 'Mary', age: 25 },
    { name: 'Joseff', age: 27 },
    { name: 'Ann', age: 27 }
]

function sort(array) {
    return array.sort((a,b) => {
        if (a.age > b.age) {
            return 1;
        }
        if (a.age > b.age) {
            return -1;
        }
        if (a.age = b.age) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
        }
    });
}

console.log(sort(people));