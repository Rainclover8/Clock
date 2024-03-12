const hours = document.getElementById("hour");
const seconds = document.getElementById("second");
const miliSecs = document.getElementById("milisecond");

setInterval(() => {
  const date = new Date();
  hours.innerHTML = date.getHours();
  seconds.innerHTML = date.getMinutes();
  miliSecs.innerHTML = date.getSeconds();

  if (miliSecs.innerHTML < 10) {
    miliSecs.innerHTML = `0${date.getSeconds()}`;
  }
  if (seconds.innerHTML < 10) {
    seconds.innerHTML = `0${date.getMinutes()}`;
  }
  if (hours.innerHTML < 10) {
    hours.innerHTML = `0${date.getHours()}`;
  }
}, 1000);
