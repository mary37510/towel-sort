
// You should implement your task here.

module.exports = function towelSort (matrix) {
let reverseArr = [ ];
if (Array.isArray(matrix)) {
for (let i =0; i<matrix.length; i++) {
  if (i === 1 || i !==0 && i%3 === 0) {
    reverseArr.push(matrix[i].reverse());
  } else {
    reverseArr.push(matrix[i]);
  }
}
 let answer = matrix.flat(Infinity);
  return answer;
} else {
  return [ ];
}
}; 

//towelSort;