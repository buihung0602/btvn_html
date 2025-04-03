const denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
let amount = parseInt(prompt("Nhập số tiền cần rút (chia hết cho 1000): "));

function formatCurrency(number) {
    return number.toLocaleString("vi-VN");
}

if (amount % 1000 !== 0) {
    console.log("Số tiền nhập vào phải chia hết cho 1000.");
} else {
    console.log(`Số tiền cần rút: ${formatCurrency(amount)} VND`);
    for (let denom of denominations) {
        let count = Math.floor(amount / denom);
        if (count > 0) {
            console.log(`${formatCurrency(denom)} - ${count} tờ`);
            amount -= count * denom;
        }
    }
}