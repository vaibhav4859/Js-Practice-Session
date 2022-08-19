class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        let table = document.querySelector("#tableBody");
        let html = `<tr class = "tr">
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td><i class="fa fa-trash-o" style="font-size:24px; color: red;cursor:pointer"></td>
                    </tr>`;
        table.innerHTML += html;
    }

    clear() {
        let libraryForm = document.querySelector("#libraryForm");
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length > 2 || book.author.length > 2) return true;
        else return false;
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let txt;
        if (type === 'success') txt = 'Success';
        else txt = 'Error!';

        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${txt}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);

    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.querySelector("#bookName").value;
    let author = document.getElementById('author').value;

    let type;
    let types = document.querySelectorAll(".type");
    Array.from(types).forEach((typeVal) => {
        if (typeVal.checked) {
            type = typeVal.value;
        }
    });

    let book = new Book(name, author, type);
    // console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Enter a valid book');
        display.clear();
    }

    if (display.validate(book)) {
        // Local storage for book names
        let names = localStorage.getItem("names");
        if (names == null)
            namesObj = [];
        else
            namesObj = JSON.parse(names);
        namesObj.push(name);
        localStorage.setItem("names", JSON.stringify(namesObj));

        // Local storage for author names
        let authors = localStorage.getItem("authors");
        if (authors == null)
            authorsObj = [];
        else
            authorsObj = JSON.parse(authors);
        authorsObj.push(author);
        localStorage.setItem("authors", JSON.stringify(authorsObj));

        // Local storage for book types
        let booktypes = localStorage.getItem("booktypes");
        if (booktypes == null)
            typesObj = [];
        else
            typesObj = JSON.parse(booktypes);
        typesObj.push(type);
        localStorage.setItem("booktypes", JSON.stringify(typesObj));
    }

    // e.preventDefault();
}


function showbooks() {
    let names = localStorage.getItem("names");
    if (names == null) namesObj = [];
    else namesObj = JSON.parse(names);

    let authors = localStorage.getItem("authors");
    if (authors == null) authorsObj = [];
    else authorsObj = JSON.parse(authors);

    let booktypes = localStorage.getItem("booktypes");
    if (booktypes == null) typesObj = [];
    else typesObj = JSON.parse(booktypes);

    let table = document.querySelector("#tableBody");
    table.innerHTML = "";
    let html = "";
    for (let i = 0; i < namesObj.length; i++) {
        html += `<tr class = "tr">
                    <td>${namesObj[i]}</td>
                    <td>${authorsObj[i]}</td>
                    <td>${typesObj[i]}</td>
                    <td><i class="fa fa-trash-o" onclick = "removebook(${i})" style="font-size:24px; color: red; cursor:pointer"></td>
                </tr>`;
    }
    table.innerHTML += html;
}

showbooks();

// Search
document.querySelector("#searchTxt").addEventListener("input", search);
document.querySelector("#searchBtn").addEventListener("click", search);

function search(e) {
    let txt = document.querySelector("#searchTxt").value.toLowerCase();
    let table = document.querySelectorAll(".tr");
    // console.log(txt);
    Array.from(table).forEach(function (element) {
        let intxt = "";
        element.querySelectorAll("td").forEach(function (elem) {
            intxt += elem.innerText.toLowerCase();
        });
        if (intxt.includes(txt)) {
            element.style.display = "";

        } else {
            element.style.display = "none";
        }
    });
    e.preventDefault();
}

function removebook(index) {
    console.log("dlt");
    let names = localStorage.getItem("names");
    if (names == null) namesObj = [];
    else namesObj = JSON.parse(names);

    let authors = localStorage.getItem("authors");
    if (authors == null) authorsObj = [];
    else authorsObj = JSON.parse(authors);

    let booktypes = localStorage.getItem("booktypes");
    if (booktypes == null) typesObj = [];
    else typesObj = JSON.parse(booktypes);

    namesObj.splice(index, 1);
    localStorage.setItem("names", JSON.stringify(namesObj));
    authorsObj.splice(index, 1);
    localStorage.setItem("authors", JSON.stringify(authorsObj));
    typesObj.splice(index, 1);
    localStorage.setItem("booktypes", JSON.stringify(typesObj));
    showbooks();
}