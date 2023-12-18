var alertShow = true;
setInterval(() => {
    document.title = alertShow ? "Level - 2 | Task - 1" : "Basic Calculator";
    alertShow = !alertShow;
}, 5000);

function dark_lightMode() {
    let ToggleCheck = document.getElementById("checkbox");
    let main = document.getElementById('main');
    let icon = document.querySelector('i');
    let navbar = document.querySelector('#nav');
    let calculatorItems = document.querySelectorAll('.calc-items button');
    let equalsButton = document.querySelector('.equals');
    let historyBox = document.querySelector('.hist-part2');

    if (!ToggleCheck.checked) {
        main.style.backgroundColor = "#121212c5";
        main.style.color = "#fafafa";
        icon.className = `ri-toggle-fill`;
        icon.style.color = "orange";
        navbar.style.borderBottom = `1px solid #fafafa`;

        calculatorItems.forEach(button => {
            button.style.color = "#fafafa";
            button.style.backgroundColor = "#121212";
        });

        equalsButton.style.backgroundColor = "orange";
        historyBox.style.backgroundColor = "#121212c5";
        historyBox.style.color = "#fafafa";
        


    }
    else {
        main.style.backgroundColor = " #fafafa";
        main.style.color = "#121212";
        icon.style.color = "#121212";
        icon.className = `ri-toggle-line`;
        navbar.style.borderBottom = `1px solid #121212`;

        calculatorItems.forEach(button => {
            button.style.color = "#121212c5";
            button.style.backgroundColor = "";
        });

        equalsButton.style.backgroundColor = "orange";
        historyBox.style.color = "#121212c5";
        historyBox.style.backgroundColor = "#fafafa";

    }
}

var flag = false;
function deleteHistory() {
    document.querySelector(".list-items").innerHTML = "";

}

// For handling calculator container ...
document.addEventListener('DOMContentLoaded', function () {
    var display = document.getElementById('display');
    var buttons = document.querySelectorAll('.calc-items button');
    var historylist = document.querySelector('.list-items');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.classList.contains('operator')) {
                handleOperator(button.innerText);
            } else if (button.classList.contains('allClear')) {
                clearDisplay();
            }
            else if (button.classList.contains('backspace')) {
                display.value = display.value.slice(0, -1);
                
            }
            else if (button.classList.contains('equals')) {
                handleEquals();
            } else {
                appendToDisplay(button.innerText);
            }
        });
    });


    function appendToDisplay(value) {
        display.value += value;
    }

    function handleEquals() {
        const expression = display.value;
        const evalExpression = eval(expression);

        if(evalExpression === undefined  || evalExpression == 0){
            display.value = 0;
        }
        else{
            try {
                // Evaluate the expression and update the display with the result
                display.value = eval(expression);
                var entry = document.createElement('li');
                entry.textContent = expression + ' = ' + eval(expression);
                historylist.appendChild(entry);
    
            } catch (error) {
                // Handle errors, such as division by zero
                clearDisplay();
            }
        }
    }

    function clearDisplay() {
        display.value = "";
    }

    function handleOperator(operator) {
        const currentDisplayValue = display.value;
        const lastChar = currentDisplayValue.charAt(currentDisplayValue.length - 1);

        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '%') {
            // If the last character is an operator, replace it with the new one
            display.value = currentDisplayValue.slice(0, -1) + operator;
        } else {
            // Otherwise, append the operator to the display
            appendToDisplay(operator);
        }
    }
})
