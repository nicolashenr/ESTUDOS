//O Comando .push no fim da variavel com lista adiciona os elementos  entre ([]) ao final da matriz.

var minhaLista = [1, 2, 3];
minhaLista.push([4,5,6, [7,8,9]]);

console.log(minhaLista);

minhaLista.push(12); //também adiciona sem [], aliás, esse elemento iria iniciar outra array dentro da array
console.log(minhaLista)

