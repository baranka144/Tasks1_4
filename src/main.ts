import { cercleCheck } from "./task1";
import { powerSeries } from "./task2";
import { matrixMult } from "./task3";
import { fibonacci } from "./task4";

console.log('Task 1');
console.log(cercleCheck(3,3));

console.log('Task 2');
powerSeries(0.5);

console.log('Task 3');
let matrixA = [
    [1,2],
    [3,4]
];
let matrixB = [
    [5,6],
    [7,8]
];
console.log(matrixA.length);
const result = matrixMult(matrixA, matrixB);
if (typeof result === 'string') {
  console.log(result);
} else {
  for (let item of result) {
    console.log(item);
  }
}

console.log('Task 4');
console.log(fibonacci(6));
