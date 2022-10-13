import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector("input[name='delay']");
const stepEl = document.querySelector("input[name='step']");
const amountEl = document.querySelector("input[name='amount']");
const formEl = document.querySelector('.form');
let delayUser;
let stepUser;
let amountUser;

delayEl.addEventListener(
  'input',
  event => (delayUser = Number(event.target.value))
);

stepEl.addEventListener(
  'input',
  event => (stepUser = Number(event.target.value))
);

amountEl.addEventListener(
  'input',
  event => (amountUser = Number(event.target.value))
);

function onSubmit(event) {
  event.preventDefault();

  for (let i = 0; i < amountUser; i += 1) {
    setTimeout(() => {
      createPromise(amountUser, delayUser)
        .then(({ position, delay }) => {
          Notify.success(
            `✅ Fulfilled promise ${[i + 1]} in ${delayUser + i * stepUser}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notify.failure(
            `❌ Rejected promise ${[i + 1]} in ${delayUser + i * stepUser}ms`
          );
        });
    }, delayUser + i * stepUser);
  }
}

formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject('error');
    }
  });
}
