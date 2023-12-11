import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timerContainer = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const values = document.querySelectorAll('.value');
const labels = document.querySelectorAll('.label');
const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds');

let selectedDate;
let timer;

startBtn.disabled = true;

timerContainer.style.display = 'flex';
timerContainer.style.gap = '20px';
timerContainer.style.marginTop = '10px';

for (const field of fields) {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
}

for (const value of values) {
  value.style.fontSize = '30px';
}

for (const label of labels) {
  label.style.textTransform = 'uppercase';
  label.style.fontSize = '10px';
  label.style.fontWeight = '600';
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (currentDate > selectedDates[0]) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      startBtn.disabled = false;
      return (selectedDate = selectedDates[0]);
    }
  },
};

flatpickr(input, options);

function addLeadingZero(value) {
  value = value.toString();
  return value.padStart(2, '0');
}

function countdown() {
  let days;
  let hours;
  let minutes;
  let seconds;
  const currentDate = new Date();
  let timeDifference = selectedDate - currentDate;
  if (timeDifference <= 0) {
    clearInterval(timer);
    Notiflix.Notify.success('the countdown is over');
    return;
  }

  days = convertMs(timeDifference).days;
  hours = convertMs(timeDifference).hours;
  minutes = convertMs(timeDifference).minutes;
  seconds = convertMs(timeDifference).seconds;
  timeDisplay(days, hours, minutes, seconds);
}

function timeDisplay(days, hours, minutes, seconds) {
  daysField.innerText = addLeadingZero(days);
  hoursField.innerText = addLeadingZero(hours);
  minutesField.innerText = addLeadingZero(minutes);
  secondsField.innerText = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  countdown();
  timer = setInterval(countdown, 1000);
});
