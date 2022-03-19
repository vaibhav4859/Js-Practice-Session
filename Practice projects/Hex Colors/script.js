document.querySelector('#btn').addEventListener('click', () => {
    var hexno = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    var code1 = "";
    var code2 = "";

    for(let idx = 0; idx < 6; idx++){
        random = Math.floor(Math.random() * hexno.length);
        code1 += hexno[random];
        random = Math.floor(Math.random() * hexno.length);
        code2 += hexno[random];
    }

    document.body.style.background = `linear-gradient(to right, #${code1}, #${code2})`;
    document.querySelector("#code1").textContent = code1;
    document.querySelector("#code2").textContent = code2;
});