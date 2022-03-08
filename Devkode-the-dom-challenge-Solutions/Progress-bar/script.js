document.querySelector("#btn").addEventListener("click", () => {
    let val = document.querySelector(".times");
    if (val.innerText == "") val.innerText = 1, loadBar();
    else val.innerText = Number(val.innerText) + 1;
});

function loadBar() {
    const progress = document.querySelector(".progress");
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            progress.style.width = i + "%";
        }, i * 25);

        if (i == 100) setTimeout(nextbar, i * 25);
    }
}

function nextbar() {
    document.querySelector(".progress").style.width = "0";
    let val = document.querySelector(".times");

    if (val.innerText == 1) val.innerText = "";
    else {
        let num = Number(val.innerText) - 1;
        val.innerText = num;
        loadBar();
    }
}