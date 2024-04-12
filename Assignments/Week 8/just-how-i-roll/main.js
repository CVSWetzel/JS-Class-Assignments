/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6 = document.querySelector('#d6-roll');
const doubleD6 = document.querySelectorAll('.double.d6.roll');
const d12 = document.querySelector('#d12-roll');
const d20 = document.querySelector('#d20-roll');


/*******************
 * EVENT LISTENERS *
 *******************/
d6.addEventListener('click', () =>{
  let counter = 0;
  let random;
  const num = setInterval(() => {
    random = getRandomNumber(6)
    d6.src = `./images/d6/${random}.png`
    counter ++
    if (counter >= 10) {
      clearInterval(num)
      sixes.push(random)
      document.querySelector('d6-rolls-mode').innerText = findMode(sixes)
    }
  }, 30)
})

const roll6s = () =>{
  let roll1 = getRandomNumber(6)
  let roll2 = getRandomNumber(6)
  let roll = roll1 + roll2
  doubleSixes.push(roll)
  doubleD6[0].src = `./images/d6/${roll1}.png`
  doubleD6[1].src = `./images/d6/${roll2}.png`
}
doubleD6.forEach((die) => {
  die.addEventListener('click', roll6s)
})

d12.addEventListener('click', () =>{
  const random = getRandomNumber(12)
  d12.src = `./images/numbers/${random}.png`
  twelves.push(random)
})

d20.addEventListener('click', () =>{
  const random = getRandomNumber(20)
  d20.src = `./images/numbers/${random}.png`
  twenties.push(random)
})


/******************
 * RESET FUNCTION *
 ******************/

document.querySelector('#reset-button').addEventListener('click', reset)

function reset(){
  console.log('called')
  d6.src = './images/start/d6.png'
  doubleD6.forEach((die) => die.src = './images/start/d6.png')
  d12.src = './images/start/d12.jpeg'
  d20.src = './images/start/d20.jpg'
  while(sixes.length > 0){
    sixes.pop()
  }
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function roll6s() {
  let roll1 = getRandomNumber(6);
  let roll2 = getRandomNumber(6);
  let roll = roll1 + roll2;
  doubleSixes.push(roll);
  doubleD6[0].src = `./images/d6/${roll1}.png`;
  doubleD6[1].src = `./images/d6/${roll2}.png`;

  document.querySelector('#double-d6-rolls-mode').innerText = findMode(doubleSixes);
}

// Helper function to find mode
function findMode(arr) {
  let modeMap = {};
  let maxCount = 0;
  let modes = [];

  for (let num of arr) {
    if (!modeMap[num]) modeMap[num] = 1;
    else modeMap[num]++;

    if (modeMap[num] > maxCount) {
      modes = [num];
      maxCount = modeMap[num];
    } else if (modeMap[num] === maxCount) {
      modes.push(num);
    }
  }

  return modes.join(', ');
}

// Event listener for the twin six-sided dice
doubleD6.forEach((die) => {
  die.addEventListener('click', roll6s);
});



/****************
 * MATH SECTION *
 ****************/
function calculateMean(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

function calculateMedian(arr) {
  const sortedArr = sortByNumber(arr);
  const middle = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    return sortedArr[middle];
  }
}

// Event listener for rolling the six-sided die
d6.addEventListener('click', () => {
  const random = getRandomNumber(6);
  d6.src = `./images/d6/${random}.png`;
  sixes.push(random);

  document.querySelector('#d6-rolls-mean').innerText = calculateMean(sixes).toFixed(2);
  document.querySelector('#d6-rolls-median').innerText = calculateMedian(sixes);
  document.querySelector('#d6-rolls-mode').innerText = findMode(sixes);
});

// Event listener for rolling the twelve-sided die
d12.addEventListener('click', () => {
  const random = getRandomNumber(12);
  d12.src = `./images/numbers/${random}.png`;
  twelves.push(random);

  document.querySelector('#d12-rolls-mean').innerText = calculateMean(twelves).toFixed(2);
  document.querySelector('#d12-rolls-median').innerText = calculateMedian(twelves);
  document.querySelector('#d12-rolls-mode').innerText = findMode(twelves);
});

// Event listener for rolling the twenty-sided die
d20.addEventListener('click', () => {
  const random = getRandomNumber(20);
  d20.src = `./images/numbers/${random}.png`;
  twenties.push(random);

  document.querySelector('#d20-rolls-mean').innerText = calculateMean(twenties).toFixed(2);
  document.querySelector('#d20-rolls-median').innerText = calculateMedian(twenties);
  document.querySelector('#d20-rolls-mode').innerText = findMode(twenties);
});
