let myquote = [];
let currpos = 0;

function loadQuote() {
    fetch('https://api.quotable.io/random')
        .then(res => {
            if (res.status == 200) return res.json();
            else throw Error(res.statusText);
        })
        .then(data => {
            myquote[0] = data.content;
            display();  // fetch works asynchronously so without doing this undefined will be displayed at first until data is fetched succesfully from that url
        })
        .catch(err => console.log(err));
}

function display() {

    document.querySelector("#quote").innerHTML = myquote[0].substring(0, currpos) + '<span>\u25AE</span>';

    if (currpos++ != myquote[0].length)
        setTimeout(display, 100);
    else {
        setTimeout(loadQuote, 4000);
        currpos = 0;
    }
}

window.addEventListener('load', loadQuote);