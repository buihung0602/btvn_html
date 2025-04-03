const n = parseInt(prompt("Nhập một số nguyên:"));

if (isNaN(n) || n < 1) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ!");
} else {
    let isPrime = true;

    if (n < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime ? `${n} là số nguyên tố.` : `${n} không phải là số nguyên tố.`);
}
