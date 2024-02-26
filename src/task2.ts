export function powerSeries(x: number): void {
    if (-1 > x || x > 1) {
        console.log("X must be between -1 and 1");
        return;
    }
    let current = x;
    let prec = 0.01;
    let sum = 0;
    let pow = x;
    let sign = -1;
    let n = 1;
    while (Math.abs(current) > prec) {
        sign *= -1;
        current = sign * pow / n;
        sum += current;
        pow *= x;
        n++;
    };
    console.log(`Вычисленное значение: ${(sum).toFixed(3)}`);
    console.log(`Точное значение: ${Math.log(1 + x)}`);
    return;
}