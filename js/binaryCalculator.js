const res = window.document.getElementById('res');
const btns = window.document.getElementById('btns');
btns.addEventListener('click', handleClick);

let currentDisplay = '';
let val1 = '';      // stored value keyed prior to operator
let operator = '';

function handleClick(e) {
  let keyed = e.target.innerHTML;
  console.log(val1, operator);
  if (keyed === '0' || keyed === '1') {
    currentDisplay += keyed
  } else if (keyed === 'C') {
    currentDisplay = '';
    val1 = '';
    operator = '';
  } else if (keyed === '+' || keyed === '-' || keyed === '*' || keyed === '/') {
    val1 = currentDisplay;
    operator = keyed;
    currentDisplay = '';
    res.innerHTML = currentDisplay;
  } else if (keyed === '=') {
    if (val1 && operator && currentDisplay) {
      currentDisplay = math(val1, operator, currentDisplay)
    }
  }
  res.innerHTML = currentDisplay;
}

const add = (val1, val2) => (val1 + val2).toString(2);
const subtract = (val1, val2) => (val1 - val2).toString(2);
const multiply = (val1, val2) => (val2 * val2).toString(2);
const devide = (val1, val2) => Math.floor((val1 / val2).toString(2));

function math(val1, operator, val2) {
  // convert nums to base 10 prior to passing
  val1 = parseInt(val1, 2);
  val2 = parseInt(val2, 2);
  if (val1 && operator === '+') return add(val1, val2);
  else if (val1 && operator === '-') return subtract(val1, val2);
  else if (val1 && operator === '*') return multiply(val1, val2);
  else if (val1 && operator === '/') return devide(val1, val2);
}