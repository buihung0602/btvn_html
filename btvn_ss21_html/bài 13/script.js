const size = 8;

for (let i = size; i > 0; i--) {
    console.log('*'.repeat(i));
}
console.log("\n");

for (let i = 1; i <= size; i++) {
    console.log('*'.repeat(i));
}

console.log("\n");

for (let i = 1; i <= size; i++) {
    console.log(' '.repeat(size - i) + '*'.repeat(i));
}

console.log("\n");

for (let i = size; i > 0; i--) {
    console.log(' '.repeat(size - i) + '*'.repeat(i));
}
