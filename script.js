
const total = document.getElementById('total');

const count = document.getElementById('count')
console.log(amount)
console.log(rate)

count.addEventListener('click', function () {

  let amount = document.getElementById('amount').value;
  let rate = document.getElementById('rate').value;

  console.log(amount)
  console.log(rate)

  if (isNaN(rate) || isNaN(amount)) {
    alert('Введите число');
    document.getElementById('rate').value = 21000;
    document.getElementById('amount').value = 1000;

  }
  let sum = amount / rate;

  total.innerText = '';

  total.innerText = sum.toFixed(7)
})