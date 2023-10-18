// Задача о палиндроме: напишите функцию, которая проверяет, 
// является ли заданная строка палиндромом. 
// Палиндром — это строка, которая читается одинаково в обоих направлениях 
// (например, «аргентина манит негра»).

function palindrom(text) {
    let reversedText = text.toLowerCase().split('').reverse().join('');
    return text === reversedText;
}
console.log(palindrom('Аргентина манит негра'));

function palindrom(text) {
    let reversedText = text.toLowerCase().replace(/[^а-яё]/g, '');
    return reversedText == [...reversedText].reverse().join('');
}
  
console.log(palindrom('Аргентина манит негра!'))