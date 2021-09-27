const initialPrice = document.getElementById('initial-price');
const stockCount = document.getElementById('stock-count');
const currentPrice = document.getElementById('current-price');
const submit = document.getElementById('submit');
const msg = document.getElementById('msg');

function calcProfit(costPrice, currPrice) {
  let profit = currPrice - costPrice;
  let profitPercentage = (profit / costPrice) * 100;
  profitPercentage = profitPercentage.toFixed(2);
  msg.innerText = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPercentage}`;
  msg.style.color = 'green';
}

function calcLoss(costPrice, currPrice) {
  let loss = costPrice - currPrice;
  let lossPercentage = (loss / costPrice) * 100;
  lossPercentage = lossPercentage.toFixed(2);
  msg.innerText = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercentage} :(`;
  msg.style.color = 'red';
}

function calc() {
  msg.innerText = '';

  if (
    initialPrice.value === '' ||
    stockCount.value === '' ||
    currentPrice.value === ''
  ) {
    msg.innerText = 'Please fill in all the fields';
    msg.style.color = 'red';
  } else {
    const costPrice = initialPrice.value * stockCount.value;
    const currPrice = currentPrice.value * stockCount.value;
    if (costPrice < currPrice) {
      calcProfit(costPrice, currPrice);
    } else if (costPrice == currPrice) {
      msg.innerText = `No pain No gain, and no gain no pain :)`;
      msg.style.color = '#1b1b1b';
    } else {
      calcLoss(costPrice, currPrice);
    }
  }
}

submit.addEventListener('click', calc);
