const result = document.getElementById("result");
const input = document.getElementById("input");
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const addition = document.getElementById("plus");
const subtraction = document.getElementById("minus");
const division = document.getElementById("divide");
const multiplication = document.getElementById("times");
const del = document.getElementById("del");
const clear = document.getElementById("clr");
const equal = document.getElementById("equal");
const sqRoot = document.getElementById("sqrts");

zero.addEventListener("click", () => {
    input.innerText += 0;
})

one.addEventListener("click", () => {
    input.innerText += 1;
})

two.addEventListener("click", () => {
    input.innerText += 2;
})

three.addEventListener("click", () => {
    input.innerText += 3;
})

four.addEventListener("click", () => {
    input.innerText += 4;
})

five.addEventListener("click", () => {
    input.innerText += 5;
})

six.addEventListener("click", () => {
    input.innerText += 6;
})

seven.addEventListener("click", () => {
    input.innerText += 7;
})

eight.addEventListener("click", () => {
    input.innerText += 8;
})

nine.addEventListener("click", () => {
    input.innerText += 9;
})

addition.addEventListener("click", () => {
    const currentValue = input.innerText;
    input.innerText = currentValue + "+";
});

subtraction.addEventListener("click", () => {
    const currentValue = input.innerText;
    input.innerText = currentValue + "-";
});

multiplication.addEventListener("click", () => {
    const currentValue = input.innerText;
    input.innerText = currentValue + "*";
});

division.addEventListener("click", () => {
    const currentValue = input.innerText;
    input.innerText = currentValue + "/";
});

equal.addEventListener("click", () => {
    const expression = input.innerText;
    const resultValue = eval(expression);
    result.innerText = resultValue;
})

del.addEventListener("click", () => {
    const currentValue = input.innerText;
    input.innerText = currentValue.slice(0, -1);
})

clear.addEventListener("click", () => {
    input.innerText = "";
    result.innerText = "";
})

sqRoot.addEventListener("click", () => {
    const currentValue = input.innerText;
    const resultValue = Math.sqrt(currentValue);
    result.innerText = resultValue;
})