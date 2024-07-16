let firstNumber;
let operator;
let secondNumber = 0;
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

function AC(){
    firstNumber = undefined;
    secondNumber = 0;
    operator = undefined;
    result = undefined;
    updateDisplay(0);


    
}



function addDecimal(){

}

function getResult(){
    
        result = operate(operator);
        firstNumber = result;
        secondNumber = 0;
        operator = undefined;
        updateDisplay(result);
        
    
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
console.log(result);

function updateDisplay(numberDisplay){
let display = document.querySelector("#DisplayNumber");
display.textContent = numberDisplay;
}

function selectNumber(number){
    

    if(firstNumber === undefined){
        firstNumber = number;
        updateDisplay(firstNumber);
        return firstNumber;
       }
       else if(operator === undefined){
        firstNumber += number.toString();
        updateDisplay(firstNumber);
        return firstNumber;
       }
       else {
        if (secondNumber === "") {
            secondNumber = number.toString();
            secondNumber = parseFloat(secondNumber);
        } else {
            secondNumber += number.toString();
            secondNumber = parseFloat(secondNumber);
        }
        updateDisplay(secondNumber);
        return number(secondNumber);
    }

    
       }




const btn_1 = document.querySelector("#button1");
        
                btn_1.addEventListener("click", () => {
                  selectNumber(1);

                   console.log(firstNumber);
                });


                const btn_2 = document.querySelector("#button2");
        
                btn_2.addEventListener("click", () => {
                  selectNumber(2);
                
                });

const btn_3 = document.querySelector("#button3");
btn_3.addEventListener("click", () => {
    selectNumber(3);
  
  });

  const btn_4 = document.querySelector("#button4");
  btn_4.addEventListener("click", () => {
    selectNumber(4);
  
  });

  const btn_5 = document.querySelector("#button5");
  btn_5.addEventListener("click", () => {
    selectNumber(5);
  
  });

  const btn_6 = document.querySelector("#button6");
  btn_6.addEventListener("click", () => {
    selectNumber(6);
  
  });

  const btn_7 = document.querySelector("#button7");
  btn_7.addEventListener("click", () => {
    selectNumber(7);
  
  });

  const btn_8 = document.querySelector("#button8");
  btn_8.addEventListener("click", () => {
    selectNumber(8);
  
  });

  const btn_9 = document.querySelector("#button9");
  btn_9.addEventListener("click", () => {
    selectNumber(9);
  
  });

  const btn_0 = document.querySelector("#button0");
  btn_0.addEventListener("click", () => {
    selectNumber(0);
  
  });

  const btn_AC = document.querySelector("#buttonAC");
  btn_AC.addEventListener("click", () => {
    AC();
  
  });

  const btn_equals = document.querySelector("#buttonEquals");
  btn_equals.addEventListener("click", () => {
    result = operate(operator);
    updateDisplay(result);
  
  });

  const btn_divide = document.querySelector("#buttonDivide");
  btn_divide.addEventListener("click", () => {
    if(operator === undefined){
        operator = 4;
    }
    else{
        getResult();
        operator = 4;
    }
  
  });

  const btn_add = document.querySelector("#buttonAdd");
  btn_add.addEventListener("click", () => {
    if(operator === undefined){
        operator = 1;
    }
    else{
        getResult();
        operator = 1;
    }
  
  });

  const btn_sub = document.querySelector("#buttonSub");
  btn_sub.addEventListener("click", () => {
    if(operator === undefined){
        operator = 2;
    }
    else{
        getResult();
        operator = 2;
    }
  
  });

  const btn_multiply = document.querySelector("#buttonMultiply");
  btn_multiply.addEventListener("click", () => {
    if(operator === undefined){
        operator = 3;
    }
    else{
        getResult();
        operator = 3;
    }
  
  });




                

              
        
              

               

             
            
    