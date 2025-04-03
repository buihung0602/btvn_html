let number = prompt("Nhap so tien:");
let formattedCurrency = Number(number).toLocaleString("vi-VN") + " VNĐ";

console.log(formattedCurrency);
document.writeln(formattedCurrency);
