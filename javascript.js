let rowsNum = 4;

const container = document.querySelector("#container");
const result = document.querySelector("#result");

function createGrid() {

    // for (i = 1; i < rowsNum + 1; i++) {
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
                    result.textContent = buttondiv.textContent;
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
                    result.textContent = button.textContent;
                });
            
                container.appendChild(button);
            // }
            } else if (i === 0) {

                const buttonplus = document.createElement("button");
                buttonplus.classList.toggle(`number`);
                buttonplus.classList.toggle(`bordered`);
                buttonplus.classList.toggle(`background`);
                buttonplus.textContent = "+";
                // button.style.flexBasis = "10vh";
                buttonplus.addEventListener('click', () => {
                    result.textContent = buttonplus.textContent;
                });
                container.appendChild(buttonplus)

                const buttondec = document.createElement("button");
                buttondec.classList.toggle(`number`);
                buttondec.classList.toggle(`bordered`);
                buttondec.classList.toggle(`background`);
                buttondec.textContent = ".";
                // button.style.flexBasis = "10vh";
                buttondec.addEventListener('click', () => {
                    result.textContent = buttondec.textContent;
                });
            
                container.appendChild(buttondec);
                
            }
            const button = document.createElement("button");
            button.classList.toggle(`number`);
            button.classList.toggle(`bordered`);
            button.classList.toggle(`background`);
            // innerDiv.setAttribute("id", `divR${i}C${j}`);
            // let size = 5;
            // button.style.flexBasis = "10vh";
            button.textContent = i;
            
            button.addEventListener('click', () => {
                result.textContent = button.textContent;
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
                    result.textContent = buttoneq.textContent;
                });
                container.appendChild(buttoneq);

                const buttonminus = document.createElement("button");
                buttonminus.classList.toggle(`number`);
                buttonminus.classList.toggle(`bordered`);
                buttonminus.classList.toggle(`background`);
                buttonminus.textContent = "-";
                // button.style.flexBasis = "10vh";
                buttonminus.addEventListener('click', () => {
                    result.textContent = buttonminus.textContent;
                });
            
                container.appendChild(buttonminus);
            }
            // const innerDiv = document.createElement("div");
            i--;
            // innerDiv.classList.toggle(`innerDiv`);
            // innerDiv.classList.toggle(`row${i}`);
            // innerDiv.classList.toggle(`col${j}`);
            // innerDiv.setAttribute("id", `divR${i}C${j}`);
            // let size = 100 / rowsColsNum;
            // innerDiv.style.flexBasis = size + "%";
            // innerDiv.addEventListener('mouseenter', () => {
            //     innerDiv.classList.add('hoveredDiv');
            // });
            // container.appendChild(innerDiv);
        } 


    // }
}

createGrid();

let number1;
let operator;
let number2;

const clear = document.querySelector("#clear");
    // button.style.flexBasis = "10vh";
    clear.addEventListener('click', () => {
        result.textContent = "0";
    });

function operate(operator, a, b) {
    switch (operator) {
        case "+": return add(a, b);
        break;
        case "-": return subtract(a, b);
        break;
        case "/": return divide(a, b);
        break;
        case "*": return multiply(a, b);
        default: return "ERROR";
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