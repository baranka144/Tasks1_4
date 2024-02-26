"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task1_1 = require("./task1");
const task2_1 = require("./task2");
const task3_1 = require("./task3");
const task4_1 = require("./task4");
console.log('Task 1');
console.log((0, task1_1.cercleCheck)(3, 3));
console.log('Task 2');
(0, task2_1.powerSeries)(0.5);
console.log('Task 3');
let matrixA = [
    [1, 2],
    [3, 4]
];
let matrixB = [
    [5, 6],
    [7, 8]
];
console.log(matrixA.length);
const result = (0, task3_1.matrixMult)(matrixA, matrixB);
if (typeof result === 'string') {
    console.log(result);
}
else {
    for (let item of result) {
        console.log(item);
    }
}
console.log('Task 4');
console.log((0, task4_1.fibonacci)(6));
//# sourceMappingURL=main.js.map