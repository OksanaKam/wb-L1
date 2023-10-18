// Анализатор сложности пароля: создайте функцию, которая оценивает сложность 
// введенного пользователем пароля. Необходимо анализировать длину пароля, 
// использование различных символов, наличие чисел и букв в разных регистрах. 
// Выведите пользователю оценку сложности пароля и предложите улучшения, 
// если пароль слишком слабый.

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    
function strengthPasswordChecker(password){
       
    if(strongPassword.test(password)) {
        console.log('Сильный пароль');
    } else if(mediumPassword.test(password)){
        console.log('Средний пароль');
    } else{
        console.log('Слабый пароль');
    }
}

strengthPasswordChecker('12345678');
strengthPasswordChecker('Rshhn30d@');
strengthPasswordChecker('Qwe12!');
