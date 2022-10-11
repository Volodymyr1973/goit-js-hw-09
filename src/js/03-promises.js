import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
console.dir(formEl);

const delayEl = document.querySelector("input[name='delay']");
console.dir(delayEl);

const stepEl = document.querySelector("input[name='step']");
console.dir(stepEl);

const amountEl = document.querySelector("input[name='amount']");
console.dir(amountEl);

const buttonEl = document.querySelector('button');
console.dir(buttonEl);

function onInput(event) {
  console.log(event);
}

formEl.addEventListener('input', onInput);

function onSubmit(event) {
  console.log(event);
}

buttonEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
