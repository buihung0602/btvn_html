function kiemTraTamGiac(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        console.log("Đây là một tam giác hợp lệ.");

        if (a === b && b === c) {
            console.log("Tam giác đều");
        } else if (a === b || a === c || b === c) {
            console.log("Tam giác cân");
        } else if (
            a * a + b * b === c * c ||
            a * a + c * c === b * b ||
            b * b + c * c === a * a
        ) {
            console.log("Tam giác vuông");
        } else {
            console.log("Tam giác thường");
        }
    } else {
        console.log("Ba cạnh không tạo thành một tam giác hợp lệ.");
    }
}

kiemTraTamGiac(3, 4, 5);
kiemTraTamGiac(5, 5, 5);
kiemTraTamGiac(5, 5, 7);
kiemTraTamGiac(3, 5, 7);
kiemTraTamGiac(1, 2, 3);
