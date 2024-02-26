export function fibonacci(n: number): number {
    if (n < 0) {
        console.log("n must be >= 0");
        return -1;
    }
    if (n == 0) {
        return 0;
    }
    if (n in [1,2]) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}