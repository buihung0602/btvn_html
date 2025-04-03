let n = Number(prompt("Nhap mot so:"));
let sqrtN = Math.sqrt(n);
let result = Number.isInteger(sqrtN) ? `${n} la so chinh phuong` : `${n} khong phai so chinh phuong`;

document.writeln(result);
