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
console.log(btnStop);

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getDisableButton() {
  btnStart.getAttribute('disabled', 'true');
  btnStart.style.color = 'gray';
}

function onClickStart(event) {
  console.log(event);
  intervalId = setInterval(
    () => (bodyEl.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

btnStart.addEventListener('click', onClickStart);

getDisableButton();

function onCliclStop(event) {
  console.log(event);
  clearInterval(intervalId);
}

btnStop.addEventListener('click', onCliclStop);
