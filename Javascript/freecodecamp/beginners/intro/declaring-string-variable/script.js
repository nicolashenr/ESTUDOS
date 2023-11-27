//Essas são os três tipos de "aspas" que podem ser usadas para string "", '', ``. Repare que ´´ não foi usado. O lado da crase importa
//São chamadas de literal strings, ou strings literais
var primeiroNome = "Nicole ";
var ultimoNome = 'Gostosa';
var convite = `. Vamos Viajar?`;

console.log(primeiroNome, ultimoNome, convite);

//Escapando de citações literais em strings, ou como usar "" dentro de ""

//para ver o código de console.log é preciso comentar essa var abaixo com //, se não ele apresenta erro.
//var minhaString = "Eu sou uma"double quoted" string dentro de outra string"double quotes"";

//O javascript considera o fim da "" como fim da string, existe um caracter para escapar disso. O backslash \

minhaString = "Eu sou uma\"double quoted\" string dentro de outra string\"double quotes";
console.log(minhaString);

minhaString = "Eu sou uma \"string\" dentro de uma outra string";
console.log(minhaString);


//Citando strings com aspas simples, podemos usar as aspas diferentes para colocar quotes (aspas) dentro de strings
//Lembrando do formato das aspas que são aceitas: '', "", `` (não ´´)

minhaString = 'Eu sou uma "string" dentro de outra string';
console.log(minhaString);

//Sequencia de escape em strings

/*
\'  aspas simples 
\"  aspas duplas
\\  backslash/barra invertida
\n  nova linha
\r  carriege return
\t  tab
\b  backspace
\f  form feed
*/

minhaString = "Primeira linha\n\t\\Segunda linha\nTerceira Linha";
console.log(minhaString);

//Concatenando strings com o operador plus "+"

minhaString = "Eu venho primeiro. " + "Eu venho depois. ";
console.log(minhaString)

//Concatenando com o operador +=

minhaString += "E eu chego depois ainda.";
console.log(minhaString);

