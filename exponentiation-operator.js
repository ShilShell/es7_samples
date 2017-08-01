console.log(3 * 3 * 3);//27
console.log(Math.pow(3, 3));//27

// Exponentiation Operator ** introduced in ES 2016 aka ES7
console.log(3 ** 3);//27

var num = 3;
//short hand form
num**=3;
console.log(num);//27

// Funny cases
console.log(3 ** 0);//1  
console.log(NaN ** 0);//1  
console.log(Infinity ** 0);//1  

console.log(3 ** NaN);//NaN  
console.log(NaN ** NaN);//NaN  
console.log(Infinity ** NaN);//NaN  