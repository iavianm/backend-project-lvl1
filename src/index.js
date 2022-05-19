export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

export const primeNumber = (n) => {
  if (n === 2) return 'yes';
  if (n > 2) {
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'no';
      }
      i += 1;
    }
  }
  return 'yes';
};
