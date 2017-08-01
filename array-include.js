var numList = new Array(44, 22, 55, 11, 55);
// or var numList = [44, 22, 55, 11];

console.log(numList.indexOf(55));//2
console.log(numList.indexOf(32));//-1

// includes() introduced in ES 2016 aka ES7
console.log(numList.includes(55));//true
console.log(numList.includes(32));//false

console.log(numList.includes(55, 3));//true

console.log(numList.includes(22));//true
console.log(numList.includes(22, 2));//false