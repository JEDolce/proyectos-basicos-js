const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021,11,24,11,30,0);

// en vez de poner la fecha a mano, pongo una fecha futura
// sumando 10 dias a la fecha actual
// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

// getDay y getMonth me dan un numero, por eso uso la array
let month = futureDate.getMonth();      
month = months[month];

const weekday = weekdays[futureDate.getDay()];  

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = Math.floor(t / oneDay); 
  let hour = Math.floor((t % oneDay) / oneHour); 
  let minutes = Math.floor((t % oneHour) / oneMinute); 
  let seconds = Math.floor((t % oneMinute) / 1000);
  
  // set values array
  const values = [days, hour, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item =`0${item}`
    } else {
      return item
    }
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {    // cuando currentTime > futureTime
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
  }
};

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();