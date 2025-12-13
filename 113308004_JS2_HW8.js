function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Division by zero!";
    return a / b;
}

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var op = document.getElementById("operateWay").value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    let result;

    switch(op) {
        case "plus":
            result = add(num1, num2);
            break;
        case "minus":
            result = subtract(num1, num2);
            break;
        case "mul":
            result = multiply(num1, num2);
            break;
        case "div":
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation";
    }

    
    if (typeof result === "number") {
        result = result.toFixed(2);
    }

    let resultEl = document.getElementById("result");
    if (!resultEl) {
        resultEl = document.createElement("p");
        resultEl.id = "result";
        document.body.appendChild(resultEl);
    }
    resultEl.textContent = "Result=" + result;
}
