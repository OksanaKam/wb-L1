// Задача: Взаимодействие с формами: Напишите функцию, которая получает данные 
// из формы на веб-странице и выполняет определенные действия с этими данными, 
// например, отправляет их на сервер или отображает всплывающее 
// окно с результатами.

function serializeForm(formNode) {
    const { elements } = formNode;
    const data = new FormData();
    Array.from(elements)
        .filter((item) => !!item.name)
        .forEach((element) => {
            const { name, value } = element;
      
            data.append(name, value);
        })
    return data;
}

async function sendData(data) {
    return await fetch('/api/apply/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
    })
}

function onSuccess() {
    alert('Ваша заявка отправлена!');
}

function onError(error) {
    alert(error.message);
}
  
async function handleFormSubmit(event) {
    event.preventDefault();
    const data = serializeForm(event.target);
    const { status, error } = await sendData(data);
    if (status === 200) {
        onSuccess(event.target);
    } else {
        onError(error);
    }
}
  
const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)