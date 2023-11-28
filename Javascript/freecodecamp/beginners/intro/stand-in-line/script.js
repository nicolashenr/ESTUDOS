function nextInLine(arr, item){
    arr.push(item)
    return arr.shift(item);
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));  //JSON.stringify() é uma forma de transformar um array em uma string facilmente imprimível na tela


/*
exemplo 2
*/


function proximaLinha (array, itens) {
    array.push(itens);
    return array.shift(itens);
}

var testeArray = ["Nome", "Idade", "Email", "Telefone", "Endereço"];

console.log("Antes da função: " + JSON.stringify(testeArray));
console.log(proximaLinha(testeArray, "Tipo de Conta"));
console.log("Depois da função: " + JSON.stringify(testeArray));

