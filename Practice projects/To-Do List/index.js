document.querySelector("#listinput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const val = document.querySelector("#listinput").value;
        pushitem(val);
    }
});

document.querySelector("#Submit").addEventListener("click", () => {
    const val = document.querySelector("#listinput").value;
    pushitem(val);
});

pushitem = (val) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const check = document.createElement("i");
    const trash = document.createElement("i");
    const text = document.createElement("p");


    item.className = "item";
    text.textContent = val;

    check.className = " tick fas fa-check-square";
    check.style.color = "lightgray";
    check.addEventListener("click", () => {
        if (check.style.color == "lightgray")
            check.style.color = "limegreen";
        else
            check.style.color = "lightgray";
    })
    div.appendChild(check);

    trash.className = "fas fa-trash";
    trash.style.color = "darkgray";
    trash.addEventListener("click", () => {
        item.remove();
    })
    div.appendChild(trash);

    item.appendChild(text);
    item.appendChild(div);

    document.querySelector("#list").appendChild(item);
    document.querySelector("#listinput").value = "";
}