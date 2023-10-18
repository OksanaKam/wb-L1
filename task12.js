// Задача на работу с объектами: создайте объект, представляющий собой книгу. 
// Объект должен иметь свойства, такие как: название книги, автор и год издания. 
// Напишите методы для получения и изменения значений свойств книги.

const book = {
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: '1813'
}

console.log(book);
console.log(book.name);
console.log(book.author);
console.log(book.year);

// изменяем свойство книги
book.name = 'Emma';
console.log(book.name);

// добавляем свойство книги
book.country = 'England';
console.log(book);

// удаляем свойство книги
delete book.country;
console.log(book);