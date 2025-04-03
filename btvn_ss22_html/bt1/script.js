let arr=[];

arr[0]=1;
arr[1]='banana';
arr[2]=3;
arr[3]='apple';

arr.push('hungsoma');

arr.unshift('cherry');

arr.splice(2,0,'grape');

arr = [arr,9];

newArr = arr.concat('chuối', 'cam');

document.writeln(newArr);

let arrNew=[];

let n = Number(prompt("nhập số lượng phần tử: "));

