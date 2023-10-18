// Задача на промисы: напишите функцию, которая принимает URL изображения 
// и возвращает промис, который разрешается с данными об изображении, когда оно 
// загружено. Когда говорится "промис разрешается с данными об изображении", 
// это означает, что промис должен быть успешно выполнен (resolved) с данными 
// об изображении после того, как изображение будет загружено.

const loadImage = (url) => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', reject);
    img.src = url;
});
  
loadImage('https://images.unsplash.com/photo-1697377389156-5624773d1a21?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1678')
    .then(img => console.log(`w: ${img.width} | h: ${img.height}`))
    .catch(err => console.error(err));
