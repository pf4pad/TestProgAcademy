
const total = document.getElementById('total');

const count = document.getElementById('count')
console.log(amount)
console.log(rate)

count.addEventListener('click', function () {
  const rate = document.getElementById('rate').value;

  const amount = document.getElementById('amount').value;
  console.log(amount)
  console.log(rate)

  if (isNaN(rate) || isNaN(amount)) {
    alert('Введите число')
    amount = 21000;
    rate = 1000;
  }
  let sum = amount / rate;

  total.innerText = '';

  total.innerText = sum.toFixed(7)
})