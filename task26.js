// Задача: Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно 
// обходит дерево DOM, начиная с указанного элемента, и выполняет определенное 
// действие с каждым узлом (например, выводить информацию о теге в консоль).

function walkDOM(element) {
    console.log(element.tagName);
    const children = element.children;
    if (children.length = 0) {
        return
    }
    for (const child of children) {
        try {
            walkDOM(child)
        } catch (error) {
            console.log(error);
        }
    }
};

walkDOM(document.body);