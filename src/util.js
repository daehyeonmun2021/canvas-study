export const PI2 = Math.PI * 2;

export const ranInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const array1D = (length) => {
  return [...Array.from({ length })];
};
