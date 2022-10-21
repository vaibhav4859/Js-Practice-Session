shownotes();
document.querySelector("#addBtn").addEventListener('click', () => {
    let txt = document.querySelector("#inputTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(txt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    txt.value = "";
    shownotes();
});

function shownotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` 
                        <dive class="container-fluid">
                            <div class="my-3 mx-3 card notescard" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Note ${index + 1}</h5>
                                    <p id = "content">${element}</p>
                                    <a onclick = "deletenode(${index})" class="btn btn-primary">Delete Note</a>
                                </div>
                            </div>
                        </dive>
                     `
        //  console.log(element.length);
    });

    let noteselm = document.querySelector("#notes");
    if (noteselm.length == 0) {
        notes.innerHTML = `Bsdk kuch likh na`;
    } else {
        noteselm.innerHTML = html;
    }
}

let deletenode = (index) => {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}

document.querySelector("#searchTxt").addEventListener("input", find);
document.querySelector("#search").addEventListener("click", find);

function find() {
    let txt = document.querySelector("#searchTxt").value.toLowerCase();
    let cards = document.getElementsByClassName("notescard");

    Array.from(cards).forEach(function (element) {
        let intxt = element.getElementsByTagName("p")[0].innerText;
        if (intxt.includes(txt)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}