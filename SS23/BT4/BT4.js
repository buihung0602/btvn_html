// Nhập số lượng phần tử trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử trong mảng:"));
let arr = [];
let count = 0;

// Nhập từng ký tự vào mảng
for (let i = 0; i < n; i++) {
    let value = prompt(`Nhập ký tự thứ ${i + 1}:`);
    arr.push(value); // Thêm vào mảng

    // Kiểm tra nếu là số
    if (!isNaN(value) && value.trim() !== "") {
        count++;
    }
}

// In kết quả
console.log("Mảng đã nhập:", arr);
console.log("Số lượng ký tự số trong mảng:", count);
