const guessSecretNumber = () => {
  let start = 1;
  let end = 100;
  let found = false;
  let middle;
  const secretNumber = Math.floor(Math.random() * (end - start) + 1);
  console.log('Компьютер 1 загадал число: ' + secretNumber);

  while (start <= end && found === false) {
    middle = Math.floor((start + end) / 2);
    console.log('Компьютер 2: Пробую число ' + middle + '.');
    if (secretNumber === middle) {
      found = true;
      console.log('Компьютер 1: Угадал!');
    } else if (secretNumber < middle) {
      console.log('Компьютер 1: Меньше.');
      end = middle - 1;
    } else if (secretNumber > middle) {
      console.log('Компьютер 1: Больше.');
      start = middle + 1;
    }
  }
};

guessSecretNumber();
