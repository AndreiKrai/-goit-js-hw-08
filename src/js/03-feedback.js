const inputEl = document.querySelector('.feedback-form');

inputEl.addEventListener('input', onFormInput);
inputEl.addEventListener('submit', onFormSubmit);
window.addEventListener('load', onPageLoad);

let formData = {};

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
console.log('123');
function onPageLoad(event) {
  const storageData = localStorage.getItem('feedback-form-state');
  if (!storageData) return;
  formData = JSON.parse(storageData);
  console.log(formData);
  // використовуємо функцію для переборупо ключам та постановки значення. Використовуємо цикл, бо полів інпуту може бути і 100шт.
  for (const key in formData) {
    inputEl.elements[key].value = formData[key];
    //   console.log(storageDataObj[key]);
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}

// інакше виконання
// import Throttle from 'lodash.throttle';
// // ** находим ссылки на необходимые поля ввода данных
// const form = document.querySelector('.feedback-form');
// const email = form.querySelector('[name = "email"]');
// const message = form.querySelector('[name = "message"]');
// // **создаем переменную для хранения длинного ключа
// // убираем магические стили и строки
// const localKey = 'feedback-form-state';
// // **создаем ссылки на наши импуты и форму
// form.addEventListener('input', Throttle(storageFormData, 500));
// form.addEventListener('submit', onFormSubmit);
// // сохраняет написаное в хранилище
// window.addEventListener('load', checkStorage);
// function checkStorage() {
//   // провераяем хранилище на наличие записаных ключей.
//   if (!localStorage.getItem(localKey)) return;
//   const formValue = JSON.parse(localStorage.getItem(localKey));
//   for (const key in formValue) {
//     form.elements[key].value = formValue[key];
//   }
// email.value = formValue.email;
// message.value = formValue.message;
// }
// **функция отправки
// function onFormSubmit(event) {
//   event.preventDefault();
//   // // второй способ достать данные
//   //   const { email, message } = event.currentTarget.elements;
//   //   console.dir({ email: email.value, message: message.value });
//   const saveData = JSON.parse(localStorage.getItem(localKey));
//   console.dir(saveData);
//   localStorage.removeItem(localKey);
//   event.currentTarget.reset();
// }
// // //** фукнция хранения данных в хранилище
// function storageFormData(event) {
//   const formValue = { email: '', message: '' };
//   // если в нашем обьекте что то есть то добавь новые к существующим
//   // что б не затирались данные когда вводим в другом поле
//   if (localStorage.getItem(localKey)) {
//     Object.assign(formValue, JSON.parse(localStorage.getItem(localKey)));
//   }
//   // создаем локальное хранилище записываем данные приводимые к строке
//   formValue[event.target.name] = event.target.value.trim();
//   localStorage.setItem(localKey, JSON.stringify(formValue));
// }
