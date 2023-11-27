//ADIÇÃO

var a = 1;
var b;
var c;

a += 1;
console.log(a)

b = 5;
c = "string"

b += 4;
console.log(b)

c += "i am a ";
console.log(c);

//SUBTRAÇÃO - igual o atalho de adição

a -= 1;
b -= 10;
c -= "i am a "; //  esse comando resulta em NaN (not a number)
console.log(a, b, c);

//MULTIPLICAÇÃO

a *= 4;
b *= 5.2;
c *= "string"; //NaN
console.log(a, b, c);

//DIVISÃO

a /= 3;
b /= 2;
c /= "string"; //NaN
console.log(a, b, c);




