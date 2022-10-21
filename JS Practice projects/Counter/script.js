let num = 0;
document.querySelector('.inc').addEventListener("click", () => {
    num++;
    document.querySelector(".count").textContent = num;
});

document.querySelector('.dec').addEventListener("click", () => {
    num--;
    document.querySelector(".count").textContent = num;
});