let a = Number(prompt("Nhap gia tri a:"));
let b = Number(prompt("Nhap gia tri b:"));
let c = Number(prompt("Nhap gia tri c:"));

let delta = b * b - 4 * a * c;

if (delta < 0) {
    document.writeln("Phuong trinh vo nghiem");
} else if (delta === 0) {
    let x = -b / (2 * a);
    document.writeln(`Phuong trinh co nghiem kep: x = ${x}`);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.writeln(`Phuong trinh co hai nghiem: x1 = ${x1}, x2 = ${x2}`);
}
