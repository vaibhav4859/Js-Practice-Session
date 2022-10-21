document.querySelector('#input').addEventListener("keydown", (event) => {
    if (event.key === "Enter")
        getMessage();
});

document.querySelector(".submit").addEventListener("click", () => {
    getMessage();
});

getMessage = () => {
    document.querySelector(".output").textContent = document.querySelector("#input").value;
    document.querySelector("#input").value = "";
}