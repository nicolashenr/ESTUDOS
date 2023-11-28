//Default funciona como uma espécie de else

function caseInSwitch(val){
    var answer = "";
    switch (val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
        default:
            return val;
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));
console.log(caseInSwitch(0));
console.log(caseInSwitch("string"));


//Multiplas opções idênticas em instruções switch

    function sequentialSizes(val){
        var answer = "";
        switch (val) {
            case 1:
            case 2:
            case 3:
                answer = "Low";    
                break;
            case 4:
            case 5:
            case 6:
                answer = "Mid";
                break;
            case 7:
            case 8:
            case 9:
                answer = "High"
                break;   
            default:
                break;
        }
        return answer;
    }

    console.log(sequentialSizes(1));
    console.log(sequentialSizes(2));
    console.log(sequentialSizes(4));
    console.log(sequentialSizes(9));
    console.log(sequentialSizes(3));



