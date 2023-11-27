//Usando function (função) para reutilizar códigos

function nomeDaFunção(){
    console.log("Hello world, how you doin?");
} 

//Até aqui nada acontece, só estamos declarando a função, ela ainda não foi "chamada"


nomeDaFunção(); //AQUI SIM estamos chamando a função fora do bloco de código
nomeDaFunção();


function minhaPrimeiraFuncao(){
    let nombre = "Nicole ";    
    console.log("Você vai conseguir " + nombre)
    console.log(nombre += "Henrique" + " eu sei que vai!")
}

minhaPrimeiraFuncao();
minhaPrimeiraFuncao();
minhaPrimeiraFuncao();
minhaPrimeiraFuncao();
minhaPrimeiraFuncao();

    