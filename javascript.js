let firstNumber = 3;
let operator = 2;
let secondNumber = 1;

function addition(num1,num2){
    return(num1 + num2);
}

function subtraction(num1,num2){
    return(num1 - num2);
}

function multiplication(num1,num2){
    return(num1*num2);
}

function division(num1,num2){
    return(num1 / num2);
}

function operate(operator){
    let op = operator;
    if(op == 1){
        return addition(firstNumber,secondNumber);
    }

    if(op == 2){
        return subtraction(firstNumber,secondNumber);
    }

    if(op == 3){
        return multiplication(firstNumber,secondNumber);
    }

    if(op == 4){
        return division(firstNumber,secondNumber);
    }
}

let test = operate(operator);
console.log(test);