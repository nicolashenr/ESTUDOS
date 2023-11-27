//Parâmetros/Argumentos são variáveis que atuam como espaços reservados para os valores que devem ser inseridos em uma função quando ela é chamada


function funcaoComArgumentos(a,b){
    console.log(a-b);
}

funcaoComArgumentos(10, 5);

function funcaoDois(a,b,c){ //A, B e C podem ser qualquer palavra
    console.log(a + (b*c))
}

funcaoDois(2,4,3);