let firstNumber = 1;
let operator = 1;
let secondNumber = 2;
let result;
updateDisplay(0);


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
        return result = division(firstNumber,secondNumber);
    }
}

let test = operate(operator);
console.log(result);

function updateDisplay(numberDisplay){
let display = document.querySelector("#DisplayNumber");
display.textContent = numberDisplay;
}

const btn_1 = document.querySelector("#button1");
        
                btn_1.addEventListener("click", () => {
                   if(firstNumber === undefined){
                    firstNumber = 1;
                    updateDisplay(firstNumber);
                   }
                   else if(operator === undefined){
                    firstNumber += "1";
                    updateDisplay(firstNumber);
                   }
                   else if(firstNumber !== undefined && operator !== undefined){
                    secondNumber += "1";
                    updateDisplay(secondNumber);
                   }

                   console.log(firstNumber);
                })

             
            
    