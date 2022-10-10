import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
console.log(inputEl);

const buttonEl = document.querySelector('button');
buttonEl.disabled = true;

const timerEl = document.querySelector('.timer');
timerEl.style.display = 'flex';
timerEl.style.fontSize = '42px';
timerEl.style.marginTop = '20px';

const spanEl = document.querySelectorAll('span');

const fieldEl = document.querySelector('.field');

const valueDay = document.querySelector('span[data-days]');
console.dir(valueDay);

const valueHours = document.querySelector('span[data-hours]');
console.dir(valueHours);

const valueMinutes = document.querySelector('span[data-minutes]');
console.log(valueMinutes);

const valueSeconds = document.querySelector('span[data-seconds');

console.log(valueSeconds);

const currentDate = new Date().getTime();
console.log(currentDate);

let userDate;
let msUser;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    localStorage.setItem('time', `${selectedDates[0].getTime()}`);
    userDate = Number(localStorage.getItem('time'));
    console.log(userDate);
    console.log(selectedDates[0].getTime());
    setTimer();
  },
};

flatpickr('#datetime-picker', options);

function setTimer() {
  console.log(userDate);
  if (userDate > currentDate) {
    buttonEl.disabled = false;
    msUser = userDate - currentDate;
    console.log(msUser);
  } else {
    Notify.failure('Please choose a date in the future');
  }
}

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);

//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   valueSeconds.textContent = `${seconds}`;
//   return { days, hours, minutes, seconds };
// }

function convertMs(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  valueSeconds.textContent = `${seconds}`.padStart(2, '0');
  let minutes = Math.floor((ms / 1000 / 60) % 60);
  valueMinutes.textContent = `${minutes}`.padStart(2, '0');
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  valueHours.textContent = `${hours}`.padStart(2, '0');
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  valueDay.textContent = `${days}`.padStart(2, '0');
  return { days, hours, minutes, seconds };
}

function addLeadingZero() {
  valueSeconds.textContent.padStart(2, '0');
  valueMinutes.textContent.padStart(2, '0');
  valueHours.textContent.padStart(2, '0');
  valueDay.textContent.padStart(2, '0');
}

function onClick() {
  timerId = setInterval(function () {
    let changeDate = userDate - new Date().getTime();
    convertMs(changeDate);
    addLeadingZero();
    console.log(timerId);
    console.log(changeDate);
    if (changeDate <= 999) {
      clearInterval(timerId);
    }
  }, 1000);
  localStorage.removeItem('time');
  buttonEl.disabled = true;
}

buttonEl.addEventListener('click', onClick);
