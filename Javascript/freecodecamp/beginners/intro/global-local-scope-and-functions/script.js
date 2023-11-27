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


//ESCOPO LOCAL

function myLocalFunction(){
    var myVar = 5; 
    console.log(myVar)
}

myLocalFunction();
console.log(myVar);  //Recebemos uma mensagem de erro por que a variável não está definida fora do seu bloco de código


