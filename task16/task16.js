// Задача на модули и использование внешних библиотек: напишите модуль, 
// который экспортирует функцию для работы с датами. Внутри модуля используйте 
// внешнюю библиотеку Moment.js для удобной работы с датами.

class MomentModule {
    getFullDate() {
        return moment().format('DD-MM-YYYY');
    }
    
    getShortDate() {
        return moment().format('DD-MM-YY');
    }

    getYear() {
        return moment().format('YYYY');
    }
}

export default MomentModule;
