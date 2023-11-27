//Matrizes podem incluir qualquer tipo de dado em sua lista - ARRAYS FICAM DENTRO DE []

var minhaMatrizUm = [ "Zero", 1, "dois", 0.3, "QUATRO" + "CINCO", 6, 7];

var minhaMatrizDois = ["Nome", 1.23, 3, "nombre"];

//Aninhando Matrizes ou uma array dentro de outra array, ou ainda array multidimensional.

minhaMatrizUm [[ "Zero", 1, "dois", 0.3, "QUATRO" + "CINCO", 6, 7], "Um", 2,["quatro", 1, 2]];


//ACESSAR DADOS DE ARRAY COM ÍNDICES

minhaMatrizUm = [50,60,70];
minhaMatrizDois = minhaMatrizUm[0]; 

var meusDados = minhaMatrizUm[0];
console.log(meusDados);

//Modificar dados da Matriz com índices

minhaMatrizUm[2] = 78;
console.log(minhaMatrizUm)

//ACESSAR MATRIZES MULTIDIMENSIONAIS COM ÍNDICES

var myArray = [[1,2,3], [4,5,6],[[7,8,9], [10,11,12]]]

myData = myArray[2][1][2];
console.log(myData);
