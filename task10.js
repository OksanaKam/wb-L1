// Реализовать функцию конвертации строки в JSON со всеми необходимыми 
// проверками и валидациями.

let string = "name:John,age:25,gender:male";

function getJsonData(query){
    let arrayOfKeyValues = query.split(',');
    let modifiedArray =  new Array();
    for(let i=0;i< arrayOfKeyValues.length;i++){
        let arrayValues = arrayOfKeyValues[i].split(':');
        let arrayString ='"'+arrayValues[0]+'"'+':'+'"'+arrayValues[1]+'"';
        modifiedArray.push(arrayString);
    }
    let jsonDataString = '{'+modifiedArray.toString()+'}';
    let jsonData = JSON.parse(jsonDataString);
    return jsonData;
}

console.log(getJsonData(string));