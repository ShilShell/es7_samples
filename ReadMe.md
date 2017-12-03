# Features of ES7/ECMA 2016

By mid of 2016 the [ECMAScript 2016](http://ecma-international.org/ecma-262/7.0/) got approved. In this post we are going to discuss about the new features included in ES7 aka ECMA 2016. As per ECMA International the standards organisation have agreed to have yearly periodical release of new standards/features for ECMA Script. This helps browsers vendors to align and manage things. Insted of having one big list of feature sets which we had for ES6/ECMA 2015. So lets see what are the new features introduced in ES7

## Exponentiation Operator
Exponentiation is a mathematical operation, written as bn, involving two numbers, the base b and the exponent n. When n is a positive integer, exponentiation corresponds to repeated multiplication of the base: that is, bn is the product of multiplying n bases - Wikipedia
In short in Math.pow(n,n) is new form the syntax is

### Syntax

```base ** exponent```

lets see the code snippet to know more
```javascript
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
```

## includes() in Array
The includes() method determines whether an array contains a specific element, returning either true or false.

Array already has a method indexOf() which returns type of number. If -1 then object is not found else item is found from the array

### Syntax

```javascript
arrayVar.includes(searchElement)
```

```javascript
arrayVar.includes(searchElement, fromIndex)
```

***searchElement:*** The element to search for.

***fromIndex (optional):*** The position (index position) in this array at which to begin searching for searchElement. Default value is 0 (zero)

lets see the code snippet to know more
```javascript
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
```

***The snippet shared here may not work in some browsers so you might need to transpile it to ES5***