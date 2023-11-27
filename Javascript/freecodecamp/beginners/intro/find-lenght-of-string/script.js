//Estamos atribuindo o valor 0 para uma variável que usaremos mais tarde

var nomeTamanho = 0;
var nome = "Albert Caraia";

nomeTamanho = nome.length;

console.log(nomeTamanho);

var nameLength = "OioioiGugu";
console.log(nameLength.length);

//Notação de colchete (brackets) para encontrar o primeiro caractere na string

var primeiraLetraDoNome = ""; //Não chega a ser uma valor null ou undefined, mas apenas que o conteúdo dentro da string é "".
console.log(primeiraLetraDoNome);

nome = "Humbogarte";
primeiraLetraDoNome = nome[0];
console.log(primeiraLetraDoNome);

//Será que podemos usar outro valor para o índice, que está entre os colchetes

primeiraLetraDoNome = nome.length;
console.log(primeiraLetraDoNome);
primeiraLetraDoNome = nome[0];
console.log(primeiraLetraDoNome);

var indiceEscolhido = nome[4];
console.log(indiceEscolhido);

//Sim, podemos.

//NOTAÇÃO DE COLCHETES PARA ENCONTRAR ENÉSIMO CARACTERE NA STRING [n], n é uma variável número

//Para encontrar O ÚLTIMO caractere na string usando length sem saber o tamanho

var nomeUsado = "Usuário"
var ultimaLetraNomeUsado = nomeUsado[nomeUsado.length -1]; //Começando por -1 podemos pensar como n também
console.log(ultimaLetraNomeUsado);

