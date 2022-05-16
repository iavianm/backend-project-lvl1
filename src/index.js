export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};
