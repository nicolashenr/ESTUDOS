function testElseIf(val){
    if (val < 5){
        return "Menor que 5";
    } else if (val > 10) {
        return "Maior que 10";
    } else {
        return "Entre 5 e 10";
    }
}

console.log(testElseIf(4));
console.log(testElseIf(15));
console.log(testElseIf(8));

// A ORDEM DAS CONDIÇÕES IMPORTAAA!!!


/*
Encadeando declarações Else If
*/


function sizeValue(num){
    if (num < 5){
        return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
        return "Medium";
    } else if (num < 20){
        return "Large"
    } else {
        return "Huge";
    } 
}

console.log(sizeValue(1));
console.log(sizeValue(8));
console.log(sizeValue(14));
console.log(sizeValue(16));
console.log(sizeValue(6514));

