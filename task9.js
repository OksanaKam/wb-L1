// Реализовать функцию конвертации JSON в строку

const obj = {
    "name": "Иван",
    "age": 37,
    "mother": {
      "name": "Ольга",
      "age": 58
    },
    "children": [
      "Маша",
      "Игорь",
      "Таня"
    ],
    "married": true,
    "dog": null
  };
  
const jsonString = JSON.stringify(obj);
console.log(jsonString);

function objToString(obj) {
    let str = '';
    for (const [p, val] of Object.entries(obj)) {
        str += `${p}: ${val}\n`;
    }
    return str;
}

console.log(objToString(obj));

function objToString1(obj) {
    return Object.entries(obj).reduce((str, [p, val]) => {
        return `${str}${p}: ${val} `;
    }, '');
}

console.log(objToString1(obj));