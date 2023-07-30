import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state';

//Функція для зберігання поточних даних
function getFormData() {
  return { email: refs.email.value, message: refs.message.value };
}

// Додаємо слухачів подій на форму
refs.form.addEventListener('input', throttle(onFormImput, 500));
refs.form.addEventListener('submit', onFormSubmit);

//функція для зберігання поточних даних
function getFormData() {
  return { email: refs.email.value, message: refs.message.value };
}

// функція для очищення сховища і полів форми (і виведення їх у консоль) при сабміті
function onFormSubmit(event) {
  event.preventDefault();
  console.log(getFormData());
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// функція, що зберігає введені данні в локальне сховище
function onFormImput() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormData()));
}

//перевіряємо чи записані дані у сховищі, і якщо так запусуємо їх у відповідні поля форми
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  refs.email.value = email;
  refs.message.value = message;
}
