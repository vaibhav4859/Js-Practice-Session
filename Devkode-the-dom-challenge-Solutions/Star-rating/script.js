function star() {
    const container = document.querySelector("#star");
    const div = document.createElement("div");
    div.classList.add("div");
    for (let i = 1; i <= 5; i++) {
        const elem = document.createElement("i");
        elem.classList.add("fa");
        elem.classList.add("fa-star-o");
        elem.dataset.ratingVal = i;
        elem.style.padding = "2px";
        div.appendChild(elem);
    }

    let current;
    container.appendChild(div);
    container.addEventListener("mouseover", (e) => {
        const num = e.target.dataset.ratingVal;
        fill(num);
    });
    container.addEventListener("click", (e) => {
        current = e.target.dataset.ratingVal;
        fill(current);
        document.getElementById("display-star").innerHTML = current;
    });
    container.addEventListener("mouseleave", () => {
        fill(current);
    });

    function fill(val) {
        const element = document.querySelector(".div");
        for (let i = 0; i < 5; i++) {
            if (i < val) {
                element.children[i].classList.add("fa-star");
            } else {
                element.children[i].classList.remove("fa-star");
            }
        }
    }
}

star();