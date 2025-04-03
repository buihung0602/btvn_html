const n = parseInt(prompt("Nhập số nguyên dương n:"));
if (!isNaN(n) && n > 0) {
    let count = 0, num = 2;
    let primes = [];

    while (count < n) {
        let isPrime = true;

        if (num < 2) isPrime = false;
        else {
            for (let i = 2; i * i <= num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primes.push(num);
            count++;
        }

        num++;
    }

   document.writeln(`${n} số nguyên tố đầu tiên: `, primes.join(", "));
} else {
    document.writeln("Vui lòng nhập số nguyên dương hợp lệ!");
}
