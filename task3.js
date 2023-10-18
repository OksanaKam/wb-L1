// Реализовать аналог библиотеки Math (можно назвать MathX) 
// с базовым набором функций, используя замыкания:
// вычисление N-го числа в ряду Фибоначчи 
// вычисление всех чисел в ряду Фибоначчи до числа N
// вычисление N-го просто числа
// вычисление всех простых чисел до числа N

class MathX {
    fib = (n) => {
        let prev = 0, next = 1;
        for(let i = 0; i < n; i++){
          let temp = next;
          next = prev + next;
          prev = temp;
        }
        return prev;
    }

    fibAll = (n) => {
        const result = [];
        for (let i = 0; i < n; i++) {
            result.push(this.fib(i));
        }
        return result
    }

    isPrime = (num) => {
        if (num === 1 || n === 0) {
          return false;
        }
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
           return false;
          }
        }
        return true;
    }
      
    findNthPrime = (n) => {
        let count = 0;
        let num = 2;
        while (count < n) {
            if (isPrime(num)) {  
                count++;
            }  
            num++;
        }
        return num - 1;
    }
}