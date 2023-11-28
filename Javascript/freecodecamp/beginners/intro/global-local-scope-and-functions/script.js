//ESCOPO GLOBAL

//Variáveis fora do bloco de código tem escopo global, o que significa que pode ser visto de qualquer lugar do seu código javascript

var varGlobal = 10;

function fun1(){
   oopsGlobal = 5;
}
//variável escrita como na função acima, sem uso de palavra reservada automaticamente se torna de escopo global, porém se adicionarmos a palavra reservada var, não poderemos utilizar a variável na próxima função

function fun2(){
    var output = "";
    if (typeof varGlobal != "undefined"){
        output += "varGlobal: " + varGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();


//ESCOPO LOCAL - Variáveis declaradas dentro de uma função, bem como os parâmetros da função, tem escopo local

function myLocalFunction(){
    var myVar = 5; 
    console.log(myVar)
}

myLocalFunction();
// console.log(myVar);  //Recebemos uma mensagem de erro por que a variável não está definida fora do seu bloco de código



/* 

ESCOPO GLOBAL VS ESCOPO LOCAL EM FUNÇÕES - É possível ter ambos com o mesmo nome de variável. Vemos aqui que a definição de uma variável de escopo global e uma função que acessa e retorna a variavel de escopo global e em seguida imprimi a função com escopo local (que puxa a variável de escopo global)

*/

//Quando fazemos isso a variável local tem PRECEDÊNCIA sobre a variável global


var outerWear = "T-Shirt";

function myOutFit(){
    return outerWear;
}

console.log(myOutFit()); //Imprimi T-shirt


//Outro exemplo

var capaViolao = "Capa com Alça"

function guardarViolao(){
    return capaViolao;
}

console.log(guardarViolao()); //Imprimi Capa com Alça

//Porém, 

outerWear = "T-Shirt"

function roupagem(){
    var outerWear = "Blue"
    return outerWear;
}

console.log(roupagem()); //Imprimi Blue por que a variável dentro da function com escopo local teve PRECEDÊNCIA, ou seja, está em primeiro lugar, vem antes da outra variável, porém também

console.log(outerWear) //Aqui já imprimi o escopo global novamente, por que como aprendido antes, essa variável fora da function tem escopo global, assim nesse comando estamos acessando ela 


/*
Retornar o valor de uma função com Return
 */

function varalRoupas(num){
    return num - 4;
}

console.log(varalRoupas(20));



/* 
Para entender o valor indefinido retornado de uma função
*/

//Funções podem ter instruções de retorno, mas não são obrigatórias, aqui o console não mostrará nada além da funcão

var soma = 0;

function addNumber() {
    soma += 5;
}

function addNumberFloat() {
    soma += 5.4;
}

console.log(addNumber);
console.log(addNumberFloat);
console.log(soma);

/*
Atribuição com Valor Retornado
*/

var exemplo = 0;

function exemploM(num){
    return (num * 3) / 4;
}

exemplo = exemploM(15); //Aqui a linha em que estamos atribuindo o valor retornado da function
console.log(exemplo);