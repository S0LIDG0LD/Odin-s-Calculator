let rowsNum = 4;

const container = document.querySelector("#container");
const result = document.querySelector("#result");

function createGrid() {
    let i = 9;
    while (i >= 0) {
        
        if (i === 6) {
            const buttondiv = document.createElement("button");
            buttondiv.classList.toggle(`number`);
            buttondiv.classList.toggle(`bordered`);
            buttondiv.classList.toggle(`background`);
            buttondiv.textContent = "/";
            // button.style.flexBasis = "10vh";
            buttondiv.addEventListener('click', () => {
                result.textContent = buttonPressed(buttondiv.textContent);
            });
        
            container.appendChild(buttondiv);
        } else if (i === 3) {
            const button = document.createElement("button");
            button.classList.toggle(`number`);
            button.classList.toggle(`bordered`);
            button.classList.toggle(`background`);
            button.textContent = "*";
            // button.style.flexBasis = "10vh";
            button.addEventListener('click', () => {
                result.textContent = buttonPressed(button.textContent);
            });
        
            container.appendChild(button);
        } else if (i === 0) {

            const buttonplus = document.createElement("button");
            buttonplus.classList.toggle(`number`);
            buttonplus.classList.toggle(`bordered`);
            buttonplus.classList.toggle(`background`);
            buttonplus.textContent = "+";
            // button.style.flexBasis = "10vh";
            buttonplus.addEventListener('click', () => {
                result.textContent = buttonPressed(buttonplus.textContent);
            });
            container.appendChild(buttonplus)

            const buttondec = document.createElement("button");
            buttondec.classList.toggle(`number`);
            buttondec.classList.toggle(`bordered`);
            buttondec.classList.toggle(`background`);
            buttondec.textContent = ".";
            // button.style.flexBasis = "10vh";
            buttondec.addEventListener('click', () => {
                result.textContent = buttonPressed(buttondec.textContent);
            });
            container.appendChild(buttondec);
            
        }
        const button = document.createElement("button");
        button.classList.toggle(`number`);
        button.classList.toggle(`bordered`);
        button.classList.toggle(`background`);
        button.textContent = i;  
        button.addEventListener('click', () => {
            result.textContent = buttonPressed(button.textContent);
        });
        container.appendChild(button);

        if (i === 0) {
            const buttoneq = document.createElement("button");
            buttoneq.classList.toggle(`number`);
            buttoneq.classList.toggle(`bordered`);
            buttoneq.classList.toggle(`background`);
            buttoneq.textContent = "=";
            // button.style.flexBasis = "10vh";
            buttoneq.addEventListener('click', () => {
                result.textContent = buttonPressed(buttoneq.textContent);
            });
            container.appendChild(buttoneq);

            const buttonminus = document.createElement("button");
            buttonminus.classList.toggle(`number`);
            buttonminus.classList.toggle(`bordered`);
            buttonminus.classList.toggle(`background`);
            buttonminus.textContent = "-";
            // button.style.flexBasis = "10vh";
            buttonminus.addEventListener('click', () => {
                result.textContent = buttonPressed(buttonminus.textContent);
            });
            container.appendChild(buttonminus);
        }
    } 
}

createGrid();

let number1 = NaN;
let operator = "";
let number2 = NaN;

const clear = document.querySelector("#clear");
    // button.style.flexBasis = "10vh";
    clear.addEventListener('click', () => {
        result.textContent = "0";
        number1 = NaN;
        operator = "";
        number2 = NaN;
    });

function numberPressed(number) {
    if (number == ".") {
        if 
        return 
    }
}


function buttonPressed(button) {
    switch (button) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case ".":
            return numberPressed(button);
            break;
        case "/":
        case "*":
        case "-":
        case "+":
        case "=":
            return operatorPressed(button);
            break;
        default: return "ERROR buttonPressed"
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case "+": return add(a, b);
        break;
        case "-": return subtract(a, b);
        break;
        case "/": return divide(a, b);
        break;
        case "*": return multiply(a, b);
        default: return "ERROR operate";
    }
}

// Maths Functions:

function add (a, b) {
	return a + b;
};

function subtract (a, b) {
	return a - b;
};

function multiply (a, b) {
	return a - b;
};

function divide (a, b) {
	return (b !== 0 ? a / b : "INDEFINITE");
};