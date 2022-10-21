let slider = document.querySelector('#slider');

document.querySelector("#toggle").addEventListener("click", () => {
    let sliderClass = slider.classList;
    if (sliderClass.contains('slide-in')) slider.className = "slide-out";
    else slider.className = "slide-in";
});

document.querySelector("#searchWeather").addEventListener("click", () => {
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    if (city == "" || state == "") document.querySelector("#isValid").textContent = "Please Enter Valid Inputs";
    else loadWeather(city, state);
});

const loadWeather = (city, state) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=metric&appid=16a2314e91b166c8c3c5b3c33539f22b`;

    fetch(url).then(response => {
            if (response.status != 200) throw Error(response.statusText);
            return response.json();
        }).then(data => {
            displayWeather(data);
            document.querySelector("#isValid").textContent = "";
        }).catch(error => document.querySelector("#isValid").textContent = error);
}

const displayWeather = (data) => {
    setImage(data);
    document.querySelector("#degrees").innerHTML = ((data.main.temp * 9 / 5) + 32).toFixed(0) + '&deg;<span style="font-size: 1rem;margin-top: -10px;">F</span>';
    document.querySelector("#bar").textContent = "|"
    document.querySelector("#city-name").textContent = data.name;
    document.querySelector("#description").textContent = data.weather[0].description;

    setTimeout(function () {
        document.querySelector("#img").classList.add("animatee");
        document.querySelector("#degrees").classList.add("animatee");
        document.querySelector("#bar").classList.add("animatee");
        document.querySelector("#city-name").classList.add("animatee");
        document.querySelector("#description").classList.add("animatee");
    }, 300);

    document.querySelector("#city").value = "";
    document.querySelector("#state").value = "State";
}

const setImage = (data) => {
    if (data.weather[0].main === "Clear") {
        document.querySelector("#img").src = "https://raw.githubusercontent.com/iamcodefoxx/Weather-App/20892282c0fca03a1f184e1a7ba677c25e084447/sun.svg";
    } else if (data.weather[0].main === "Snow") {
        document.querySelector("#img").src = "https://raw.githubusercontent.com/iamcodefoxx/Weather-App/20892282c0fca03a1f184e1a7ba677c25e084447/snow.svg";
    } else if (data.weather[0].main === "Thunderstorm") {
        document.querySelector("#img").src = "https://raw.githubusercontent.com/iamcodefoxx/Weather-App/20892282c0fca03a1f184e1a7ba677c25e084447/thunderstorm.svg";
    } else if (data.weather[0].main === "Drizzle" ||
        data.weather[0].main === "Mist" ||
        data.weather[0].main === "Smoke" ||
        data.weather[0].main === "Haze" ||
        data.weather[0].main === "Dust" ||
        data.weather[0].main === "Fog" ||
        data.weather[0].main === "Sand" ||
        data.weather[0].main === "Dust" ||
        data.weather[0].main === "Ash" ||
        data.weather[0].main === "Squall" ||
        data.weather[0].main === "Tornado") {
        document.querySelector("#img").src = "https://raw.githubusercontent.com/iamcodefoxx/Weather-App/20892282c0fca03a1f184e1a7ba677c25e084447/drizzle.svg";
    }
    else if (data.weather[0].main === "Clouds") {
        if (data.weather[0].description === "few clouds")
            document.querySelector("#img").src = "https://raw.githubusercontent.com/iamcodefoxx/Weather-App/20892282c0fca03a1f184e1a7ba677c25e084447/few_clouds.svg";
        else
            document.querySelector("#img").src = "https://raw.githubusercontent.com/iamcodefoxx/Weather-App/20892282c0fca03a1f184e1a7ba677c25e084447/overcast_clouds.svg";
    }
    else if (data.weather[0].main === "Rain") {
        querySelector("#img").src = "https://raw.githubusercontent.com/iamcodefoxx/Weather-App/20892282c0fca03a1f184e1a7ba677c25e084447/light_rain.svg";
    }
}

const defaultWeather = () => {
    loadWeather("San Francisco", "California");
}

window.addEventListener('load', defaultWeather);
window.addEventListener('load', loadStates);

async function loadStates() {
    let url = "https://cst336.herokuapp.com/projects/api/state_abbrAPI.php";
    let response = await fetch(url);
    let data = await response.json();

    data.forEach(function (i) {
        var state = document.createElement("option");
        state.textContent = i.state;
        state.value = i.state;
        document.querySelector("#state").appendChild(state);
    });
}