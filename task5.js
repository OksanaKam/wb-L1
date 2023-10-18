// Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов, 
// на выходе объект, представляющий из себя односвязный список.

const objectList = [{
    "prop1":"value1",
    "prop2":"value2"
}, {
    "prop1":"value3", 
    "prop2":"value4"
}]

function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}

console.log(objectList);
console.log(json2array(objectList));
