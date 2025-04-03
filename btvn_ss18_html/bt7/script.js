const a = parseFloat(prompt("Mời bạn nhập vào số a "));
const b = parseFloat(prompt("Mời bạn nhập vào số b "));
const operator = prompt("Mời bạn nhập vào các phép tính (+, -, *, /, %) ");

if (!isNaN(a) && !isNaN(b)) {
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : "Không thể chia cho 0";
            break;
        case '%':
            result = b !== 0 ? a % b : "Không thể chia cho 0";
            break;
        default:
            result = "Phép toán không hợp lệ";
    }
    alert(`Kết quả của phép tính trên: ${a} ${operator} ${b} = ${result}`);
    console.log(`Kết quả của phép tính trên: ${a} ${operator} ${b} = ${result}`);
} else {
    alert("Vui lòng nhập số hợp lệ.");
    console.log("Vui lòng nhập số hợp lệ.");
}