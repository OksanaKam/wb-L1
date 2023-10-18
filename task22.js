// Посчитайте сколько раз можно вызвать функцию document.write() 
// внутри document.write(). Объясните результат.

let i = 0;

const func = () => {
  i++;
  func();
};

try {
  func();
} catch (e) {
  console.log(i);
}

// document.write();
document.write(document.write(document.write(document.write(document.write(document.write(
    document.write(document.write(document.write(document.write(document.write(document.write(
        document.write(document.write(document.write(document.write(document.write(document.write(
            document.write(document.write(document.write(document.write(document.write(document.write(
                document.write(document.write(document.write(document.write(document.write(document.write(
                    document.write(document.write(document.write(document.write(document.write(
                        document.write(document.write(document.write())))))))))))))))))))))))))))))))))))));

// В статье на Хабре встретила информацию, что есть ограничение в браузерах на вывод document.write() в 
// document.write(). Это количество зависит от браузера и составляет плюс минут 20 раз. 
// Однако, я написала вывод 37 раз и получила 37 раз undefined.
// Предполагаю, что вывод ограничен размером стека вызовов.