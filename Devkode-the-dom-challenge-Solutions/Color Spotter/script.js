const getRandomColors = function () {
    var ratio = 0.618033988749895;

    var hue = (Math.random() + ratio) % 1;
    var saturation = Math.round(Math.random() * 100) % 85;
    var lightness = Math.round(Math.random() * 100) % 85;

    var color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
    var oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

    return {
        color,
        oddColor
    }
}

let colorGrid = [];
let rows = 4, score = 0; // default
function createGrid() {
    const grid = document.querySelector("#grid");
    const val = getRandomColors();

    const row = Math.floor(Math.random() * (rows - 1));
    const col = Math.floor(Math.random() * (rows - 1));
    // console.log(row, col);
    const dimension = 100 / rows - 1;

    for (let i = 0; i < rows; i++) {
        let array = [];
        for (let j = 0; j < rows; j++) {
            const box = document.createElement("div");
            box.style.width = `${dimension}%`;
            box.style.height = `${dimension}%`;
            box.style.border = "1px solid white";
            box.id = i * 4 + j;
            if (i == row && j == col) box.style.backgroundColor = `${val.oddColor}`;
            else box.style.backgroundColor = `${val.color}`;

            grid.appendChild(box);
            array.push(box);
            box.addEventListener("click", () => {
                onClick(box, row, col);
            });
        }
        colorGrid.push(array);
    }
}

createGrid();

function onClick(box, row, col) {
    const grid = document.querySelector("#grid");
    let clickedRow = Math.floor(Number(box.id) / 4);
    let clickedCol = Math.floor(Number(box.id) % 4);
    console.log(clickedRow, clickedCol);

    if (clickedRow == row && clickedCol == col) {
        rows++;
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
        }
        score++;
        setScore(score);
        createGrid();
    } else {
        rows = 4;
        setScore(0);
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
        }
        createGrid();
    }
}

function setScore(value) {
    document.querySelector("#score").innerText = value;
}
setScore(0);