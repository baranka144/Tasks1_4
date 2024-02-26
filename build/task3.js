"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixMult = void 0;
function matrixMult(matrixA, matrixB) {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        if (matrixA[i].length !== matrixB.length ||
            matrixA.length !== matrixB[i].length) {
            return "Number of columns in the first matrix must be equal to the number of rows in the second matrix for multiplication.";
        }
        result[i] = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixB.length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
exports.matrixMult = matrixMult;
//# sourceMappingURL=task3.js.map