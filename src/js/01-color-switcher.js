const bodyEl = document.querySelector('body');

const boxEl = document.querySelector('.box');
boxEl.style.display = 'flex';
boxEl.style.justifyContent = 'center';
boxEl.style.alignItems = 'center';
boxEl.style.marginTop = '500px';

const btnStart = document.querySelector('button[data-start]');
btnStart.style.width = '120px';
btnStart.style.height = '40px';
btnStart.style.margin = '4px';
console.log(btnStart);

const btnStop = document.querySelector('button[data-stop]');
btnStop.style.width = '120px';
btnStop.style.height = '40px';
btnStop.style.margin = '4px';
btnStop.disabled = true;
console.log(btnStop);

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getDisableButton() {
  btnStart.disabled = true;
}

function onClickStart(event) {
  console.log(event);
  intervalId = setInterval(
    () => (bodyEl.style.backgroundColor = getRandomHexColor()),
    1000
  );
  getDisableButton();
  btnStop.disabled = false;
}

btnStart.addEventListener('click', onClickStart);

function onCliclStop(event) {
  console.log(event);
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

btnStop.addEventListener('click', onCliclStop);
