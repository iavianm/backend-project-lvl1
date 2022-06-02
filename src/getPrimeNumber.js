const getPrimeNumber = (n) => {
  if (n === 2) return true;
  if (n > 2) {
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return false;
      }
      i += 1;
    }
  }
  return true;
};

export default getPrimeNumber;
