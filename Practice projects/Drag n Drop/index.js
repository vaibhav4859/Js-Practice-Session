const img = document.querySelector(".image");
const boxes = document.querySelectorAll(".box");

img.addEventListener("dragstart", (e) => {
    console.log("DragStart");
    e.target.className += ' hold'
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

img.addEventListener("dragend", (e) => {
    console.log("DragEnd");
    e.target.className = 'image';
});

for (box of boxes) {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("DragOver");
    });

    box.addEventListener("dragenter", (e) => {
        console.log("DragEnter");
        e.target.className += ' dashed';
    });

    box.addEventListener("dragleave", (e) => {
        console.log("DragLeave");
        e.target.className = 'box';
    });

    box.addEventListener("drop", (e) => {
        console.log("Drop");
        e.target.append(img);
    });
}