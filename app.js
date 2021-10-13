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

  let curPrice = Number(initialPrice.value);
  let initPrice = Number(initialPrice.value);
  let stkCount = Number(stockCount.value);

  if (
    initialPrice.value === '' ||
    stockCount.value === '' ||
    currentPrice.value === ''
  ) {
    displayMsg('Please fill in all the fields', 'red');
  } else if (curPrice < 0 || initPrice < 0 || stkCount <= 0) {
    displayMsg('Invalid input', 'red');
  } else {
    const costPrice = initialPrice.value * stockCount.value;
    const currPrice = currentPrice.value * stockCount.value;
    if (costPrice < currPrice) {
      calcProfit(costPrice, currPrice);
    } else if (costPrice == currPrice) {
      displayMsg('No pain No gain, and no gain no pain :)', '#1b1b1b');
    } else {
      calcLoss(costPrice, currPrice);
    }
  }
}

function displayMsg(message, color) {
  msg.innerText = message;
  msg.style.color = color;
}

submit.addEventListener('click', calc);
