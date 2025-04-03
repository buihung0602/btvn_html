let date1 = prompt("Nhap ngay thu nhat (YYYY-MM-DD):");
let date2 = prompt("Nhap ngay thu hai (YYYY-MM-DD):");

let d1 = new Date(date1);
let d2 = new Date(date2);

let timeDiff = Math.abs(d2 - d1);
let dayDiff = timeDiff / (1000 * 60 * 60 * 24);

console.log(`Do lech la ${dayDiff} ngay`);
document.writeln(`Do lech la ${dayDiff} ngay`);
