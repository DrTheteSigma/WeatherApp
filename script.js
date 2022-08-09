
const city = document.querySelector(".name")
const temperature = document.querySelector(".temperature")
const wind_speed = document.querySelector(".wind_speed")
const feelslike = document.querySelector(".feelslike")
const weather = document.querySelector(".weather")
const pressure = document.querySelector(".pressure")
const labelname = document.querySelector(".labelname")

console.log(pressure)

async function getweather(ctname){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ctname}&appid=d963bdd7faf6bc0f6ac1edff0d4b7c92`, {mode: "cors"} );
    info = await response.json()
    city.textContent= info.name
    temperature.textContent = Math.round(info.main.temp-273)  + "C"
    wind_speed.textContent = "Wind speed: " + info.wind.speed +"KM/H"
    feelslike.textContent = "Feels like: " + Math.round(info.main.feels_like-273)  + "C"
    weather.textContent = info.weather[0].main
    pressure.textContent = info.main.pressure + "PA"
    console.log(info)
    Math

}


getweather("Tampa")

function clicked(){

    getweather(labelname.value)
}