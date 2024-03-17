var number = 0;

document.getElementById('number').innerHTML = number;
const plusbutton = document.getElementById('plus_button');
const minusbutton = document.getElementById('minus_button');

plusbutton.addEventListener('click', function () {
  console.log("plus button clicked");
  console.log(++number);
  if (number <= 10) {
    document.getElementById('number').innerHTML = number;
  }
  else {
    alert('you are exceeding 10.');
  }
})

minusbutton.addEventListener('click', function () {
  console.log("minus button clicked");
  console.log(--number);
  if (number >= 0) {
    document.getElementById('number').innerHTML = number;
  }
  else {
    alert('you are at 0');
  }
})