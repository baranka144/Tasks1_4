"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = void 0;
function fibonacci(n) {
    if (n < 0) {
        console.log("n must be >= 0");
        return -1;
    }
    if (n == 0) {
        return 0;
    }
    if (n in [1, 2]) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
exports.fibonacci = fibonacci;
//# sourceMappingURL=task4.js.map