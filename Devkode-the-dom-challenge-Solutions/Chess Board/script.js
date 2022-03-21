let chessBoard = [];

function createboard() {
    let board = document.querySelector("#board");
    for (let i = 0; i < 8; i++) {
        let array = [];
        for (let j = 0; j < 8; j++) {
            let div = document.createElement("div");
            if (i % 2 == 0) {
                if (j % 2 == 0) div.classList.add("white");
                else div.classList.add("black");
            } else {
                if (j % 2 == 0) div.classList.add("black");
                else div.classList.add("white");
            }
            div.id = i * 8 + j;
            div.style.cursor = "pointer";
            board.append(div);
            array.push(div);

            div.addEventListener("click", function () {
                diagonals(div);
            });
        }
        chessBoard.push(array);
    }
}

createboard();

function diagonals(div) {
    let id = Number(div.id);
    let row = Math.floor(id / 8);
    let col = id % 8;

    let board = document.querySelector("#board");

    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 8; j++)
            chessBoard[i][j].classList.remove("diagonal");

    // Upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
        chessBoard[i][j].classList.add("diagonal");

    // Upper right diagonal
    for (let i = row, j = col; i >= 0 && j < 8; i--, j++)
        chessBoard[i][j].classList.add("diagonal");

    //Lower left diagonal
    for (let i = row, j = col; i < 8 && j >= 0; i++, j--)
        chessBoard[i][j].classList.add("diagonal");

    //Lower right diagonal
    for (let i = row, j = col; i < 8 && j < 8; i++, j++)
        chessBoard[i][j].classList.add("diagonal");
}