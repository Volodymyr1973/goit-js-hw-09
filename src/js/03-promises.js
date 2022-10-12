import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector("input[name='delay']");
console.dir(delayEl);

let delayUser;

function onDelay(event) {
  delayUser = Number(event.target.value);
  localStorage.setItem('delay', `${delayUser}`);
  console.log(typeof delayUser);
}

delayEl.addEventListener('input', onDelay);

const stepEl = document.querySelector("input[name='step']");
console.dir(stepEl);

let stepUser;

function onStep(event) {
  stepUser = Number(event.target.value);
  localStorage.setItem('step', `${stepUser}`);
  console.log(typeof stepUser);
}

stepEl.addEventListener('input', onStep);

const amountEl = document.querySelector("input[name='amount']");
console.dir(amountEl);

let amountUser;

function onAmount(event) {
  amountUser = Number(event.target.value);
  localStorage.setItem('amount', `${amountUser}`);
  console.log(typeof amountUser);
}

amountEl.addEventListener('input', onAmount);

const buttonEl = document.querySelector('button');
console.dir(buttonEl);

const formEl = document.querySelector('.form');
console.log(formEl);

function onSubmit(event) {
  event.preventDefault();

  for (let i = 1; i <= amountUser; i += 1) {
    setTimeout(() => {
      createPromise(amountUser, delayUser)
        .then(({ position, delay }) => {
          console.log(
            `✅ Fulfilled promise ${[i]} in ${delayUser + i * stepUser}ms`
          );
          Notify.success(
            `✅ Fulfilled promise ${[i]} in ${delayUser + i * stepUser}ms`
          );
        })
        .catch(({ position, delay }) => {
          console.log(
            `❌ Rejected promise ${[i]} in ${delayUser + i * stepUser}ms`
          );
          Notify.failure(
            `❌ Rejected promise ${[i]} in ${delayUser + i * stepUser}ms`
          );
        });
    }, delayUser + i * stepUser);
  }

  console.log(event);
}

formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(shouldResolve);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });

        // Fulfill
      } else {
        reject('error');

        // Reject
      }
    }, delayUser);
  });
}
