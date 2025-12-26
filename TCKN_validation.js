function isValidTCKN(tcInput) {
  let digits = tcInput.split("");
  if (digits.length !== 11) return false;

  let numbers = [];
  for (let i = 0; i < digits.length; i++) {
    let value = Number(digits[i]);
    if (Number.isNaN(value)) return false;
    numbers.push(value);
  }

  if (numbers[0] === 0) return false;

  let sumOdd = numbers[0] + numbers[2] + numbers[4] + numbers[6] + numbers[8];
  let sumEven = numbers[1] + numbers[3] + numbers[5] + numbers[7];
  let digit10 = ((7 * sumOdd) - sumEven) % 10;
  if (digit10 !== numbers[9]) return false;

  let sumFirst10 = 0;
  for (let i = 0; i < 10; i++) sumFirst10 += numbers[i];
  let digit11 = sumFirst10 % 10;
  if (digit11 !== numbers[10]) return false;

  return true;
}