const width = parseInt(prompt("Nhập chiều ngang: "));
const height = parseInt(prompt("Nhập chiều dọc: "));

document.write('<pre>');
for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        document.write('* '.repeat(width) + '\n');
    } else {
        document.write('*' + ' '.repeat((width - 2) * 2 + 1) + '*\n');
    }
}
document.write('</pre>');
