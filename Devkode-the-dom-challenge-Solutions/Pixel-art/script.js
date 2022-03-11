let colors = ["blueviolet", "lawngreen", "crimson", "darkturquoise", "deeppink", "aquamarine", "springgreen", "darkorchid", "brown", "white"];

// Create Pixel Grid
let pixelgrid = [];
function PixelArt() {
    let grid = document.querySelector("#grid");
    for (let i = 0; i < 10; i++) {
        let array = [];
        for (let j = 0; j < 10; j++) {
            let div = document.createElement("div");
            div.classList.add("box");
            div.id = i * 10 + j;
            if (i == 9)
                div.style.backgroundColor = colors[j];

            div.draggable = "true";
            grid.append(div);
            array.push(div);

            div.addEventListener("click", function () {
                fillColor(div);
            });

            div.addEventListener("dragstart", (e) => {
                if (Math.floor(Number(div.id) / 10) != 9) {
                    e.target.style.backgroundColor = currColor;
                    dragFillColor(div);
                }
            });
        }
        pixelgrid.push(array);
    }
}

PixelArt();

// On Click
let currColor;
function fillColor(div) {
    let id = Number(div.id);
    let row = Math.floor(id / 10);
    let col = id % 10;
    if (row == 9 && col == 9) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 10; j++) {
                pixelgrid[i][j].style.backgroundColor = "white";
                pixelgrid[9][i].style.border = "1px solid gray";
            }
        }
    }
    else if (row == 9) {
        currColor = div.style.backgroundColor;
        for (let i = 0; i < 9; i++)
            pixelgrid[9][i].style.border = "1px solid gray";

        div.style.border = "5px solid white";
    } else {
        div.style.backgroundColor = currColor;
    }
}

// On Drag
function dragFillColor(div) {
    const boxes = document.querySelectorAll(".box");
    let id = Number(div.id);
    let row = Math.floor(id / 10);
    let col = id % 10;

    if (row == 9) {
        currColor = div.style.backgroundColor;
    } else {
        for (box of boxes) {
            box.addEventListener("dragover", e => e.preventDefault());

            box.addEventListener("dragenter", (e) => {
                if (Math.floor(Number(e.target.id) / 10) != 9)
                    e.target.style.backgroundColor = currColor;
            });
        }
    }
}