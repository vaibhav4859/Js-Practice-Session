var expression = "";
const Input = document.querySelector(".input");
Input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        expression = document.querySelector(".input").value;
        equal(expression);
    }
});

press = (num) => {
    expression += num;
    Input.value = expression;
}

equal = () => {
    Input.value = eval(expression);
    expression = "";
}

erase = () => {
    expression = "";
    Input.value = expression;
}