const numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

const guessSecretNumber = () => {
  const secretNumber = Math.floor(Math.random() * (100 - 1) + 1);
  let start = 0;
  let end = numbers.length - 1;
  let found = false;
  let middle;

  while (start <= end && found === false) {
    middle = Math.floor((start + end) / 2);
    console.log('Компьютер 2: Пробую число ' + numbers[middle] + '.');
    if (secretNumber === numbers[middle]) {
      found = true;
      console.log('Компьютер 1: Угадал.');
    } else if (secretNumber < numbers[middle]) {
      console.log('Компьютер 1: Меньше.');
      end = middle - 1;
    } else if (secretNumber > numbers[middle]) {
      console.log('Компьютер 1: Больше.');
      start = middle + 1;
    }
  }
};

guessSecretNumber();
