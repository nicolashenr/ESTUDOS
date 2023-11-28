//ESCREVENDO A FUNÇÃO DE MULTIPLAS OPÇÕES USANDO ELSE IF


var indices = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis"]

function testElseIf (val){
    if (val < 1){
        return indices[0];
    } else if (val < 2 && val > 0){
        return indices[1];
    } else if (val < 3){
        return indices[2];
    } else if (val < 4){
        return indices[3];
    } else if (val < 5){
        return indices[4];
    } else if (val < 6){
        return indices[5];
    } else if (val < 7){
        return indices[6];
    } else {
        return indices.lenght
    }
}

console.log(testElseIf(0));
console.log(testElseIf(1));
console.log(testElseIf(2));
console.log(testElseIf(3));
console.log(testElseIf(4));
console.log(testElseIf(5));
console.log(testElseIf(6));


//ESCREVER A MESMA FUNÇÃO USANDO SWITCH


function testSwitch(val){
    switch (val) {
        case 0:
            return indices[0]
        case 1:
            return indices[1];
            break;
        case 2:
            return indices[2];
            break;
        case 3:
            return indices[3];
            break;
        case 4:
            return indices[4];
            break;
        case 5:
            return indices[5];
            break;
        case 6:
            return indices[6];
            break;
        default:
            return indices.length
            break;
    }
}


console.log(testSwitch(0));
console.log(testSwitch(1));
console.log(testSwitch(2));
console.log(testSwitch(3));
console.log(testSwitch(4));
console.log(testSwitch(5));
console.log(testSwitch(6));
