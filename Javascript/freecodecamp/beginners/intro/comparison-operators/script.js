/*
Existem muitos operadores de comparaçao que a javascript retorna como V ou F, mas o mais comum é o de igualdade, geralmente usado numa inscrução IF

*/

//OPERADOR DE IGUALDADE - faz conversão para um tipo comum >>>>> "=="

function numberIgual(num) {
    if (num == 100) { //O sinal "==" é diferente do "=", sendo um para atribuição(=) e outra para comparar se os valores são iguais
        return "Igual";
    }
    return "Não igual";
}

console.log(numberIgual('100'));
console.log(numberIgual(100));

/*
3 == 3; retorna true
3 == '3'; retorna true
*/

//OPERADOR DE IGUALDADE RESTRITA - não faz conversão de tipos >>>> "==="

function numberIgualRest(n){
    if (n === 100){
        return "Yeah! It´s TRUE";
    }
    return "Oh, shit! It´s FALSE";
}

console.log(numberIgualRest(100));
console.log(numberIgualRest("100"));

/*
3 === 3; retorna true
3 === '3'; retorna false
*/


//OPERADOR DE DESIGUALDADE - faz conversão de tipos >>>>> "!="

function naoIgual(a, b){
    if (a != b){
        return "YEAH, isso é desigual"
    }
    return "Ah, é igual."
}

console.log(naoIgual(10, "10"));
console.log(naoIgual(10, 10));
console.log(naoIgual(10, 3));

//OPERADOR DE DESIGUALDADE RESTRITA - não faz conversão de tipos >>>>>> "!=="


function naoIdentico(c,d){
    if (c !== d){
        return "não é identico identico"
    }
    return "é igualzinho, irmão"
}

console.log(naoIdentico(14, "14"));
console.log(naoIdentico(14, 14));



//OPERADORES MAIOR QUE, MENOR QUE, MAIOR QUE OU IGUAL A, MENOR OU IGUAL A


function operMaiorQue(numRef){
    if (numRef > 100){
        return "Maior que 100";
    }
    return "Menor que 100";
}

console.log(operMaiorQue(101));


function operMenorQue(numRef){
    if (numRef < 100){
        return "Menor que 100";
    }
    return "Maior que 100";
}

console.log(operMenorQue(90));


function maiorOuIgual(val){
    if (val >= 10){
        return "É igual ou maior" + val;
    }
    return "É menor que" + val;
}

console.log(maiorOuIgual(10));

function menorOuIgual(val){
    if (val <= 10){
        return "Esse valor é igual ou menor" + val;
    }
    return val + " é maior do que 10.";
}

console.log(menorOuIgual(10));
console.log(menorOuIgual(15));



/*
COMPARAÇÃO COM OPERADORES LÓGICOS "E" e "OU"

O símbolo para "E" é &&
*/

// && testar se dois valores são verdadeiros ao mesmo tempo

function testValores(val){
    if (val <= 50){
        if ( val >= 25 ) {
            return "Sim, o valor está entre ou igual a 25 e 50";
        }
    }
    return "Não, o valor está fora de 25 e 50.";

}

console.log(testValores(10));
console.log(testValores(29));

//Podemos escrever a mesma sentença acima com &&

function testeValores(val){
    if (val <= 50 && val >= 25){
        return "Sim, o valor está entre ou igual a 25 e 50.";
    }   
    return "Não, o valor está fora de 25 a 50."
}

console.log(testeValores(10));
console.log(testeValores(29));



/*
O símbolo para "OU" é ||
*/

function testLogicalOr(val){
    if (val < 10){
        return "Fora do limite";
    }

    if (val > 20){
        return "Fora do limite";
    }
    return "Dentro do Limite"
}

console.log(testLogicalOr(9));
console.log(testLogicalOr(15));

//Podemos escrever a função acima usando o símbolo ||

function testeLogicoOu(val){
    if (val < 10 || val > 20){
        return "Fora do limite"
    }
    return "Dentro do Limite"
}

console.log(testeLogicoOu(9));
console.log(testeLogicoOu(15));

//Podemos escrever essas funções com o uso do dois IF com o uso do ELSE

function testElse(val){
    if (val > 5){
        return "Yey!";
    } else {
        return "Nóh, ou nô!";
    }
}

console.log(testElse(6));
console.log(testElse(4));

function testeElse(varr){
    if (varr >= 10 && varr <= 20){
        return "Está entre 10 e 20";
    } else {
        return "Igual a " + varr;
    }
    return "hm"
}

console.log(testeElse(11));
console.log(testeElse(12));
console.log(testeElse(0));
console.log(testeElse(40));




