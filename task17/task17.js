// Необходимо реализовать простое поле ввода адреса с функцией геокодинга: 
// пользователь вводит данные в поле с помощью одного из геоинформационных 
// сервисов (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. 
// Найденные данные должны отображаться в выпадающем списке, из которого можно 
// выбрать подходящее значение.
// Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.

const address = document.querySelector('#address');
const addresses = document.querySelector('#addresses');
const button = document.querySelector('#button');

ymaps.ready(() => {

  function geocode(address) {
    ymaps.geocode(address)
      .then(res => {
        console.log(res)
        if (res.geoObjects.getLength() < 1) {
            const div = document.createElement('div');
            div.textContent = 'Поиск не дал результат';
            addresses.append(div);
            return
        }
        res.geoObjects.each((item) => {
            const div = document.createElement('div');
            div.textContent = item.getAddressLine();
            addresses.append(div);
        })
      })
  };

  function debounce() {
    let timer;
    button.addEventListener('click', () => {
        clearTimeout(timer);
        addresses.innerHTML = '';
        timer = setTimeout(() => {
          geocode(address.value);
        }, 1000);
    });
  }
  debounce();
});
