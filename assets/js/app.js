let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === "=") {
            try {
                const result = evaluateExpression(string);
                display.value = result;
                string = result.toString();
            } catch (error) {
                display.value = "Error";
            }
        } else if (buttonText === "AC") {
            string = "";
            display.value = string;
        } else if (buttonText === "DEL") {
            string = string.slice(0, -1);
            display.value = string;
        } else {
            string += buttonText;
            display.value = string;
        }
    });
});

function evaluateExpression(expression) {
    return new Function('return ' + expression)();
}
