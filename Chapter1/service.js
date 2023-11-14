//Type 1
// function sum(a, b) {
//   return a + b;
// }

//exports.sum = sum;

//Type 2

// exports.sum = (a, b) => {
//   return a + b;
// };

// exports.diff = (a, b) => {
//   return a - b;
// };

//Type 3

const sum = (a, b) => {
  return a + b;
};

const diff = (a, b) => {
  return a - b;
};

export { sum, diff };
